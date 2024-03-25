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
* @application mp-admin-server
*/

// Libraries
const jwt = require('jsonwebtoken');
const utils = require('@utils');
const { JWT_SECRET } = require('@config');
const ErrorX = utils.ErrorX;
const authenticate = async (token) => {
  try {
    // Verify the signature of the token and return the decoded payload
    // Decoding token does not require the secret key
    // That is why the signature is getting verifiedgit a
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded) {
      // Check if the token is expired
      const currentTime = Math.floor(Date.now() / 1000);
      // if iat + 15 minutes >= current time, then the token is not expired
      const isExpired = decoded.iat + 15 * 60 < currentTime;
      if (isExpired) { 
        throw new ErrorX(401, "Token is expired"); }
      return decoded.user;
    }
    // If the token is not decoded, then throw an error
    else throw new ErrorX(401, "Invalid token");
    
  } catch (error) {
    if(error instanceof ErrorX) throw new ErrorX(error.code, error.message)
    // If the token is invalid, then throw an error
    else throw new ErrorX(401, "Invalid token");
  }
};

/*
* Export the function
*/
module.exports = { authenticate };
