drop database if exist demo;

create database demo;

use demo;

create table category (
    id int primary key AUTO_INCREMENT,
    name VARCHAR(255) not null unique
);

insert into category (name) values ("Red Bull");
insert into category (name) values ("Battery");