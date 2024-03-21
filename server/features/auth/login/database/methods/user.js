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

const { user } = require("../model");

const services = require("@services");

const login = async (userEmail, password) => {
  try {
    // Check if the email exists
    if (!user.email === userEmail) {
      throw new Error("Invalid email");
    }

    // Check if the password is correct
    const isMatch = password === user.password;
    if (!isMatch) {
      throw new Error("Invalid password");
    }

    // Generate JWT token
    const token = await services.signJWT(user.email);
    if (!token) {
      throw new Error("Token generation failed");
    }
    // Unix timestamp value
    const unixTimestamp = 1710989257;

    // Convert Unix timestamp to milliseconds
    const milliseconds = unixTimestamp * 1000;

    // Create a new Date object using the milliseconds
    const date = new Date(milliseconds);

    // Output the date and time in a readable format
    console.log(date.toLocaleString());
    const response = {
      success: "true",
      message: "Login successful",
      data: {
        token: token,
      },
    };
    return response;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  login,
};
