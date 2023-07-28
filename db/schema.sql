DROP DATABASE IF EXISTS shout_db;
CREATE DATABASE shout_db;
USE shout_db;

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30),
    email VARCHAR(50),
    password VARCHAR(30)
);

CREATE TABLE shout (
    id INT PRIMARY KEY AUTO_INCREMENT,
    text VARCHAR(30),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE SET NULL
);
