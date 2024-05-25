/*
 * ./server/features/login/database/user.js
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


/*
* This file contains the user login function 
* The function is used to authenticate the user
*/

// Libraries
const { getUserModel } = require("@features/auth/database/model/user");
const bcrypt = require("bcrypt");

// server modules
const services = require("@services");
const { ErrorX } = require("@utils");

/*
* The function is used to authenticate the user
* @param {String} userEmail
* @param {String} password
* @returns {Object} response
*/
const login = async (userEmail, password) => {
  try {
    // Check if the email exists
    const retrivedUser = await getUserModel().findOne ({ email: userEmail });
    if (!retrivedUser) {
      throw new Error("User not found");
    }

    // check if the password entered by user matches the password in the database
    const isMatch = bcrypt.compareSync(password, retrivedUser.password);

    if (!isMatch) {
      throw new Error("Invalid password");
    }

    // Generate JWT token
    const token = await services.signJWT(retrivedUser.email);
    if (!token) {
      throw new Error("Token generation failed");
    }
    
    // Return the response
    const response = {
      success: "true",
      message: "Login successful",
      data: {
        token: token,
      },
    };
    return response;
  } catch (error) {
    if(error instanceof ErrorX) throw new ErrorX(error.code, error.message)
    // If there is an error, then throw an error
    else return { error: error.message };
  }
};

/*
* Export the function
*/
module.exports = {
  login,
};
