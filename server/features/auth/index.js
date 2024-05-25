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
const express = require("express");
const router = express.Router();

const {
  connectToUserDatabase,
  setUserModel,
  getUserModel,
} = require("./database");
const { loginRouter } = require("./login/Route");
const { loginEndPoint } = require("@config");

const { signupRouter } = require("./signup/Route");
const { signupEndPoint } = require("@config");

const { checkEmail } = require("@services/checkEmail");

// Router
const authRouter = router.use(loginEndPoint, checkEmail, loginRouter);

router.use(signupEndPoint, checkEmail, signupRouter);
/*
 * Export the router
 */
module.exports = {
  authRouter,
  connectToUserDatabase,
  setUserModel,
  getUserModel,
};
