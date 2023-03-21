DROP DATABASE IF EXISTS `pets`;
CREATE DATABASE IF NOT EXISTS `pets`;
USE pets;

DROP TABLE IF EXISTS `users`;
CREATE TABLE users (
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255),
	password varchar(255),
	displayName varchar(255),
	givenName varchar(255),
	surname varchar(255),
	mail varchar(255),
	phone varchar(255),
	createdDateTime varchar(255),
	userType varchar(255),
	update_time varchar(255),
	update_id int,
	update_displayName varchar(255),
	PRIMARY KEY (id, mail)
);

DROP TABLE IF EXISTS `pet_stats`;
CREATE TABLE pet_stats (
	id int,
	name varchar(255),
	description varchar(255),
	hp int,
	weight int,
	height int,
	hunger int,
	thirst int,
	exhaust int,
	fav_food int,
	dis_food int,
	gender int,
	wakeup int,
	bedtime int,
	evo_cond JSON,
	animations JSON,
	PRIMARY KEY (id)
);

DROP TABLE IF EXISTS `user_pets`;
CREATE TABLE user_pets (
	id int,
	owner_id int,
	pet_id int,
	name varchar(255),
	description varchar(255),
	hp int,
	weight int,
	height int,
	hunger int,
	thirst int,
	exhaust int,
	fav_food int,
	dis_food int,
	gender int,
	wakeup int,
	bedtime int,
	evo_cond JSON,
	animations JSON,
	PRIMARY KEY (id)
);
