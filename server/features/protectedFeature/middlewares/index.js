/*
 * ./server/features/protectedFeature/middlewares/index.js
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

// Libraries
const services = require("@services");
const utils = require("@utils");
const ErrorX = utils.ErrorX;


/*
* Verify the token and authenticate the user
* @param {object} req - The request object
*/
const verifyToken = async (req, res, next) => {
  try {
    // Get the token from the header and throw an error if the token is not found
    const authorization  =  req.header('Authorization').replace('Bearer ', '');
    if (!authorization) throw new ErrorX(401,"Token not found"); 

    // Authenticate the token and throw an error if the token is invalid
    const response = await services.authenticate(authorization);
    if (!response) throw new ErrorX(401,"Invalid token");

    // If the token is valid, then set the user data in the request object
    next();
  } catch (error) {
    (error instanceof ErrorX)
    ? res.status(error.code).json({ error: error.message })
    // If there is an error, then send the error response
    : res.status(500).json({ error: "Bad Request" });
  }
};


/*
* Export the functions
*/
module.exports = {
  verifyToken,
};
