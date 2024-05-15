/*
* /server/features/signup/middlewares/index.js
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

const { ErrorX } = require("@utils");

/*
* Function authenticates the user by verifying the token
* signature
* @param {Object} req
* @param {Object} res
* @param {Function} next
* @returns {Object} res
*/
const verifyEmailPattern = (req, res, next) => {


  const { email } = req.body;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  try {

    if (!emailPattern.test(email)) {
      throw new ErrorX(400,"Invalid Email",);
    }
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
module.exports ={ verifyEmailPattern};
