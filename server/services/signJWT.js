/*
 * ./server/services/signJWT.js
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
 * @application mplus-admin-server
 */

// Libraries
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

/*
* Sign the JWT token
* @param {object} userData - The user data
*/
const signJWT = async (userData) => {
  try {
    // Sign the token with the user data
    const token = jwt.sign(
      {
        user: userData
      },
      JWT_SECRET
    );

    // Return the token
    return token;
  } catch (error) {

    // If there is an error, then throw an error
    throw new Error(error.message);
  }
};


module.exports = { signJWT } ;