-- PostgreSQL schema for Real Estate CRM

CREATE TABLE projects (
    project_id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    schema_name TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE customers (
    customer_id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    address TEXT,
    metadata JSONB DEFAULT '{}'
);

CREATE TABLE flats (
    flat_id UUID PRIMARY KEY,
    project_id UUID REFERENCES projects(project_id),
    number TEXT NOT NULL,
    type TEXT,
    area NUMERIC(12,2),
    status TEXT DEFAULT 'available',
    metadata JSONB DEFAULT '{}'
);

CREATE TABLE booking_master (
    booking_id UUID PRIMARY KEY,
    project_id UUID REFERENCES projects(project_id),
    flat_id UUID REFERENCES flats(flat_id),
    customer_id UUID REFERENCES customers(customer_id),
    sale_value NUMERIC(12,2),
    agreement_value NUMERIC(12,2),
    charges JSONB,
    booking_date DATE,
    registration_date DATE,
    is_locked BOOLEAN DEFAULT false
);

CREATE TABLE payments (
    payment_id UUID PRIMARY KEY,
    booking_id UUID REFERENCES booking_master(booking_id),
    amount NUMERIC(12,2),
    payment_date DATE,
    payment_mode TEXT,
    paid_by TEXT,
    purpose TEXT,
    tax_rate NUMERIC(4,2),
    tax_amount NUMERIC(12,2),
    basic_amount NUMERIC(12,2),
    status TEXT DEFAULT 'pending'
);

CREATE TABLE booking_schedule (
    schedule_id UUID PRIMARY KEY,
    booking_id UUID REFERENCES booking_master(booking_id),
    due_code TEXT,
    due_amount NUMERIC(12,2),
    due_date DATE,
    auto_allot BOOLEAN DEFAULT true,
    metadata JSONB DEFAULT '{}'
);

CREATE TABLE audit_logs (
    log_id UUID PRIMARY KEY,
    user_id UUID,
    action TEXT,
    details JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    user_id UUID PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL,
    project_id UUID,
    email TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE templates (
    template_id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    document_type TEXT NOT NULL,
    file_path TEXT NOT NULL,
    mapping JSONB,
    uploaded_by UUID REFERENCES users(user_id),
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Additional tables for metadata, reports, document storage can be added as needed.