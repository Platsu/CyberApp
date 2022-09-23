CREATE DATABASE seasonapp;

CREATE TABLE IF NOT EXISTS public.user
(
    id SERIAL PRIMARY KEY,
    name character varying(64) NOT NULL,
    user_name character varying(64) NOT NULL,
    password character varying(64) NOT NULL,
    UNIQUE (user_name)
);




