/*
* endpoints.js
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
// Ping End Point to check the server status
const pingEP = process.env.PING_END_POINT

// Auth End Point to facilitate the authentication
const authEndPoint = process.env.AUTH_END_POINT

// Login End Point to facilitate the login
const loginEndPoint = process.env.LOGIN_END_POINT


// Protected End Point to facilitate the protected routes
const protectedEP = process.env.PROTECTED_END_POINT

/*
* Export the end points
*/
module.exports = { pingEP, loginEndPoint, authEndPoint, protectedEP}