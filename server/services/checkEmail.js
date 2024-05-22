/*
 * /server/services/checkEmail.js
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

// server module
const { ErrorX } = require("@utils");

// email domains
const emailDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];

// email pattern for validation of the email
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

/**
 * Function to check if the email is valid
 * @param {String} email
 * @returns {Boolean} isValid
 */

const checkEmail = (email) => {
  // check if the email meets the email pattern
  if (!emailPattern.test(email)) {
    throw new ErrorX(400, "Invalid email");
  }

  // check if the email domain is valid
  const domain = email.split("@")[1];

  if (!emailDomains.includes(domain)) {
    throw new ErrorX(400, "Invalid email domain");
  }

  console.log(`server => services => checkEmail => Email ${email} is valid`);
  return true;
};

module.exports = checkEmail;
