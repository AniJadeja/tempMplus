/*
 * ./server/features/login/controller/index.js
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
const { login } = require("../database/methods");
const { ErrorX } = require("@utils");
/*
* Export the login function
*/
exports.loginUser = async (req, res) => {
  try {

    // Get the email and password from the request body
    const { email, password } = req.body;

    // Call the login function from the database methods
    const response = await login(email, password);

    // If the response is empty, throw an error
    if (!response) {
      throw new Error("Invalid email or password");
    }

    // Set the status to 200 and send the response
    res.status(200);
    res.json(response);
    res.send();
  } catch (error) {
    (error instanceof ErrorX)
    ? res.status(error.code).json({ error: error.message })
    // If there is an error, then send the error response
    : res.status(500).json({ error: "Bad Request" });
    //res.status(401).json({ error: error.message });
  }
};
