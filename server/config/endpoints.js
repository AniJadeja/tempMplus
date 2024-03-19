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



const pingEP = process.env.PING_END_POINT
const authEndPoint = process.env.AUTH_END_POINT
const loginEndPoint = process.env.LOGIN_END_POINT

const loginEP = authEndPoint + loginEndPoint

module.exports = { pingEP, loginEP, authEndPoint}