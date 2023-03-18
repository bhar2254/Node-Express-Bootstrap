//	sql_connect.js

//	Script to setup connection with SQL DATABASE for API.

//	Written by Blaine Harper
//		For Indian Hills Community College
//		Updated 3/17/2023

//	SQL DATABASE configuration for server.js
//	Make sure to leave the password value null 
//	DONT SAVE THE DATABASE PASSWORD TO GITHUB

var mysql = require('mysql');

var con = mysql.createConnection({
	host: global.DB_HOST,
	user: global.DB_USER,
	password: global.DB_PASS,
	database: global.DB_DB
});

con.connect(function(error){
	if(error){
		throw error;
	} else {
		console.log('MySQL Database is connected successfully');
	}
});

module.exports = con;
