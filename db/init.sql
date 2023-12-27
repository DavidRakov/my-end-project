-- ./server/db/init.sql

CREATE DATABASE shopping_list;

CREATE TABLE IF NOT EXISTS users (
    userid uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
