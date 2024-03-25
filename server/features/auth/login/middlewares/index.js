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

// Libraries
const jwt = require('jsonwebtoken');


//JWT_SECRET
const { JWT_SECRET } = require('@config');

const { ErrorX } = require("@utils");

/*
* Function authenticates the user by verifying the token
* signature
* @param {Object} req
* @param {Object} res
* @param {Function} next
* @returns {Object} res
*/
const authenticate = (req, res, next) => {

  // Get the token from the header
  const token = req.header('Authorization').replace('Bearer ', '');
  try {

    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;

    // If the token is valid, then call the next middleware
    next();
  } catch (error) {
    (error instanceof ErrorX) 
    ? res.status(error.code).json({ error: error.message })
    // If the token is invalid, then send an error response
    : res.status(500).json({ error: "Bad Request" });
  }
};


/*
* Export the middleware
*/
module.exports = authenticate;
