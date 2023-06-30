create database MentorProDB

use MentorProDB

CREATE TABLE Users (
  user_id INT PRIMARY KEY IDENTITY(1, 1),
  username VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone_number VARCHAR(255),
  password VARCHAR(255) NOT NULL,
);

SELECT * FROM Users




CREATE TABLE Mentors (
  mentor_id INT PRIMARY KEY IDENTITY(1, 1),
  full_name VARCHAR(255),
  gender VARCHAR(255),
  phone_number VARCHAR(255),
  email VARCHAR(255),
  bio VARCHAR(255),
  declaration VARCHAR(255),
  tech_field VARCHAR(255),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

SELECT * FROM Mentors

CREATE TABLE Mentees (
  mentee_id INT PRIMARY KEY IDENTITY(1, 1),
  full_name VARCHAR(255),
  gender VARCHAR(255),
  phone_number VARCHAR(255),
  email VARCHAR(255),
  bio VARCHAR(255),
  interest VARCHAR(255),
  expectation VARCHAR(255),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

SELECT * FROM Mentees
