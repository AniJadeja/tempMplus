/*
* index.js
*
* Copyright (C) 2024 Aniruddhsinh Jadeja - All Rights  Reserved
* You may use and modify the code to support the needs of Mplus
* Application. You  may  add your name  as the author under the 
* original author name. 
*
* Under  no  circumstances  the  code  should be distributed to 
* anyone who is not  a part  of Mplus  application  development 
* team.
* 
* @originalAuthor Aniruddhsinh Jadeja
* Version 1.0.0.0
* @application MPlus
*/


// Importing the pingEndPoint, authEndPoint and protectedEndPoint from the endpoints.js file
const { pingEP: pingEndPoint, authEndPoint, protectedEP:protectedEndPoint, loginEndPoint} = require("./endpoints")

// Importing the PORT from the .env file
const PORT = process.env.PORT;

// Importing the JWT_SECRET from the secrets.js file
const JWT_SECRET = process.env.JWT_SECRET

/* 
* Export the configuration variables
*/
module.exports = {authEndPoint, protectedEndPoint, pingEndPoint, PORT, JWT_SECRET, loginEndPoint}