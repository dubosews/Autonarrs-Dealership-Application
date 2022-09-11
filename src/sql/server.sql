DROP DATABASE IF EXISTS autonarrsDB;
CREATE DATABASE autonarrsDB;

USE autonarrsDB;

CREATE TABLE inventory(
  id INTEGER,
  year INTEGER,
  make TEXT,
  model TEXT,
  trim TEXT,
  mileage  INTEGER,
  price  INTEGER,
  description  TEXT, 
);