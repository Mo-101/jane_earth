-- AFRO Storm Database Schema
-- Run this in your Neon PostgreSQL database

-- Hazard alerts from external sources (GDACS, NASA, ReliefWeb)
CREATE TABLE IF NOT EXISTS hazard_alerts (
    id SERIAL PRIMARY KEY,
    external_id VARCHAR(255) UNIQUE NOT NULL,
    source VARCHAR(50) NOT NULL, -- 'GDACS', 'NASA_EONET', 'RELIEFWEB'
    hazard_type VARCHAR(50) NOT NULL, -- 'FLOOD', 'CYCLONE', 'EARTHQUAKE', etc.
    severity VARCHAR(10) NOT NULL CHECK (severity IN ('RED', 'ORANGE', 'YELLOW', 'GREEN')),
    title TEXT NOT NULL,
    description TEXT,
    country VARCHAR(100),
    region VARCHAR(100),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    event_start TIMESTAMP WITH TIME ZONE,
    event_end TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT true,
    population_affected INTEGER,
    source_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for common queries
CREATE INDEX IF NOT EXISTS idx_hazard_alerts_active ON hazard_alerts(is_active);
CREATE INDEX IF NOT EXISTS idx_hazard_alerts_severity ON hazard_alerts(severity);
CREATE INDEX IF NOT EXISTS idx_hazard_alerts_type ON hazard_alerts(hazard_type);
CREATE INDEX IF NOT EXISTS idx_hazard_alerts_country ON hazard_alerts(country);
CREATE INDEX IF NOT EXISTS idx_hazard_alerts_external ON hazard_alerts(external_id);

-- Data ingestion log for pipeline monitoring
CREATE TABLE IF NOT EXISTS data_ingestion_log (
    id SERIAL PRIMARY KEY,
    source VARCHAR(50) NOT NULL,
    endpoint VARCHAR(100) NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('SUCCESS', 'ERROR', 'RUNNING')),
    records_fetched INTEGER DEFAULT 0,
    records_inserted INTEGER DEFAULT 0,
    records_updated INTEGER DEFAULT 0,
    error_message TEXT,
    response_time_ms INTEGER,
    started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX IF NOT EXISTS idx_ingestion_source ON data_ingestion_log(source, started_at DESC);
CREATE INDEX IF NOT EXISTS idx_ingestion_status ON data_ingestion_log(status);

-- Source watermarks for ingestion tracking and backoff
CREATE TABLE IF NOT EXISTS source_watermarks (
    id SERIAL PRIMARY KEY,
    source VARCHAR(50) UNIQUE NOT NULL,
    last_fetched_at TIMESTAMP WITH TIME ZONE,
    last_event_time TIMESTAMP WITH TIME ZONE,
    total_lifetime_fetches INTEGER DEFAULT 0,
    consecutive_errors INTEGER DEFAULT 0,
    backoff_until TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Initialize source watermarks
INSERT INTO source_watermarks (source, total_lifetime_fetches)
VALUES 
    ('GDACS', 0),
    ('NASA_EONET', 0),
    ('RELIEFWEB', 0)
ON CONFLICT (source) DO NOTHING;

-- Community reports from field users
CREATE TABLE IF NOT EXISTS community_reports (
    id SERIAL PRIMARY KEY,
    report_type VARCHAR(50) NOT NULL, -- ' Eyewitness', 'Damage Assessment', 'Needs Assessment'
    hazard_type VARCHAR(50) NOT NULL,
    severity_estimate VARCHAR(10) CHECK (severity_estimate IN ('RED', 'ORANGE', 'YELLOW', 'GREEN')),
    title TEXT NOT NULL,
    description TEXT,
    reporter_name VARCHAR(255),
    reporter_contact VARCHAR(255),
    reporter_organization VARCHAR(255),
    country VARCHAR(100) NOT NULL,
    region VARCHAR(100),
    locality VARCHAR(100),
    lat DECIMAL(10, 8),
    lon DECIMAL(11, 8),
    people_affected_estimate INTEGER,
    infrastructure_damage TEXT,
    immediate_needs TEXT,
    verification_status VARCHAR(20) DEFAULT 'UNVERIFIED' CHECK (verification_status IN ('UNVERIFIED', 'VERIFIED', 'REJECTED')),
    is_active BOOLEAN DEFAULT true,
    reported_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_reports_active ON community_reports(is_active);
CREATE INDEX IF NOT EXISTS idx_reports_status ON community_reports(verification_status);
CREATE INDEX IF NOT EXISTS idx_reports_country ON community_reports(country);

-- Insert sample data for testing
INSERT INTO hazard_alerts (external_id, source, hazard_type, severity, title, description, country, latitude, longitude, is_active)
VALUES 
    ('SAMPLE-001', 'GDACS', 'FLOOD', 'RED', 'Sample Flood Alert', 'This is a sample alert for testing', 'Nigeria', 6.5244, 3.3792, true),
    ('SAMPLE-002', 'NASA_EONET', 'WILDFIRE', 'ORANGE', 'Sample Wildfire', 'This is a sample wildfire alert', 'Kenya', -1.2921, 36.8219, true)
ON CONFLICT (external_id) DO NOTHING;
