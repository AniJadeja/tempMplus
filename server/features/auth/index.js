/*
* server/features/auth/index.js
*
* Copyright (C) 2024 Anirudhdhsinh Jadeja - All Rights  Reserved
* You may use and modify the code to support the needs of Mplus
* Application. You  may  add your name  as the author under the
* original author name.
*
* Under  no  circumstances  the  code  should be distributed to
* anyone who is not  a part  of Mplus  application  development
* team.
*
* @originalAuthor Anirudhdhsinh Jadeja
* Version 1.0.0.0
* @application mplus-admin-server
*/

// Libraries
const express = require('express');
const authRouter = express.Router();

const { loginRouter } = require('./login');
const loginEP = process.env.LOGIN_END_POINT;


authRouter.post(loginEP, (req, res, next) => {
    console.log('Login endpoint called by authRouter');
    next()
}, loginRouter);

module.exports = { authRouter };