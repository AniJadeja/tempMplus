/*
 * ./server/features/signup/database/user.js
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
* This file contains the user signup function 
* The function is used to authenticate the user
*/

// Libraries
const User  = require("../model/user");
const { UserModel } = require("../../model");

// server modules

const { ErrorX } = require("@utils");
/*
* The function is used to authenticate the user
* @param {String} userEmail
* @param {String} password
* @returns {Object} response
*/
const signup = async (userEmail, password) => {
  try {
    console.log("signup => ",userEmail);
    // Check if the email exists
    const userModel = new UserModel();
    userModel.email = userEmail;
    userModel.password = password;

    console.log("signup => ",userModel);

    const user = await User.findOne({ email: userEmail });
    if (user) throw new ErrorX(400, "User already exists");

    // Create a new user
    const newUser = await User.create(userModel);
    if (!newUser) throw new ErrorX(400, "User not created");

    // Check if the user was actually created
    const existingUser = await User.findOne({ email: userEmail });
    if (!existingUser) throw new ErrorX(400, "User not created");

    // Return the response
    const response = {
      success: "true",
      message: "Signup successful"
    }

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
  signup,
};