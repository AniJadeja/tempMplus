/*
 * /server/features/login/middlewares/index.js
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

const { ErrorX } = require("@utils");

const checkEmail = require("@services/checkEmail");

/*
 * Function authenticates the user by verifying the token
 * signature
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} res
 */
const authenticate = (req, res, next) => {
  try {
    // Get the token from the header
    const { email, password } = req.body;

    // check if email is valid and provided
    const emailResponse = checkEmail(email);

    if (!emailResponse) {
      throw new ErrorX(400, "Invalid email");
    }

    // check if password is valid and provided

    if (!password) {
      throw new ErrorX(400, "Password is required");
    }

    // check if the password is valid

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!passwordPattern.test(password)) {
      throw new ErrorX(400, "Invalid password");
    }

    // If the token is valid, then call the next middleware
    next();
  } catch (error) {
    error instanceof ErrorX
      ? res.status(error.code).json({ error: error.message })
      : // If the token is invalid, then send an error response
        res.status(500).json({ error: "Bad Request" });
  }
};

/*
 * Export the middleware
 */
module.exports = authenticate;
