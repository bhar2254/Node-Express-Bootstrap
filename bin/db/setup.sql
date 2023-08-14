DROP DATABASE IF EXISTS `pets`;
CREATE DATABASE IF NOT EXISTS `pets`;
USE pets;

DROP TABLE IF EXISTS `tblUser`;
CREATE TABLE tblUser (
	intId int NOT NULL AUTO_INCREMENT,
	txtDisplayName text,
	txtPass text,
	txtGivenName text,
	txtSurname text,
	txtMail text,
	txtPhone text,
	dtCreateTime text,
	txtUpdateTime text,
	intUpdateId int,
	txtUpdateName text,
	PRIMARY KEY (intId)
);

DROP TABLE IF EXISTS `tblBasePet`;
CREATE TABLE tblBasePet (
	intId int,
	txtName text,
	txtDesc text,
	intBaseHp int,
	intBaseHeight int,
	intBaseHunger int,
	intBaseThirst int,
	intBaseExhaust int,
	intFav_food text,
	intDis_food text,
	intGender int,
	intWakeup int,
	intBedtime int,
	jsonEvolCond text,
	jsonAvailAnim text,
	PRIMARY KEY (intId)
);

DROP TABLE IF EXISTS `tblPet`;
CREATE TABLE tblPet (
	intId int,
	intOwner_id int,
	intPet_id int,
	txtName text,
	intHp int,
	txtMood text,
	intHeight int,
	intWeight int,
	intHunger int,
	intThirst int,
	intExhaust int,
	PRIMARY KEY (intId)
);

DROP TABLE IF EXISTS `tblItem`;
CREATE TABLE tblItem (
	intId int,
	txtName text,
	jsonProp text,
	PRIMARY KEY (intId)
);


DROP TABLE IF EXISTS `tblInventory`;
CREATE TABLE tblInventory (
	intId int,
	intItemId int,
	intQty int,
	PRIMARY KEY (intId)
);
