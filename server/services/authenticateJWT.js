/*
* /server/services/verifyJsonWebToken.js
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
const utils = require('@utils');
const ErrorX = utils.ErrorX;
const JWT_SECRET = process.env.JWT_SECRET;
const authenticate = async (token) => {
  try {
    // Verify the signature of the token and return the decoded payload
    // Decoding token does not require the secret key
    // That is why the signature is getting verified
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded) {
      // Check if the token is expired
      const currentTime = Math.floor(Date.now() / 1000);
      // if iat + 15 minutes >= current time, then the token is not expired
      const isExpired = decoded.iat + 15 * 60 < currentTime;
      console.log("isExpired: ", isExpired);
      console.log("Decoded Token: ", decoded);
      if (isExpired) throw new ErrorX(401, "Token is expired");
      return decodedToken;
    }
    // If the token is not decoded, then throw an error
    else throw new ErrorX(401, "Invalid token");
    
  } catch (error) {
    // If the token is invalid, then throw an error
    throw new ErrorX(401, "Invalid token");
  }
};


module.exports = { authenticate };
