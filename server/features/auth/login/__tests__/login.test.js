/*
 * server/features/auth/login/__tests__/login.test.js
 *
 * Copyright (C) 2024 Anirudhdhsinh Jadeja - All Rights  Reserved
 * You may use and modify the code to support the needs of Mplus
 * Application. You  may  add your name  as the author under the
 * original author name.
 *
 * Under  no  circumstances  the  code  should be distributed to
 * anyone who is not  a part  of Mplus  application  development
 * team.
 *
 * @originalAuthor Anirudhdhsinh Jadeja
 * Version 1.0.0.0
 * @application mplus-admin-server
 */

// Libraries
const test = require("ava");
const axios = require("axios");

/*
* Test case for user login with invalid credentials
*/
test("user login failed with invalid credentials", async (t) => {
  try {
    // Attempt to login with invalid credentials
    const response = await axios.post("http://localhost:10000/auth/login", {
      email: "test@example.com",
      password: "1234",
    });
    // Expecting 200 status code and error message "Invalid password"
    t.is(response.status, 200);
    t.is(response.data.error, "Invalid password");
  } catch (error) {
    // If login fails, expecting 401 status code and error message "Invalid password"
    t.is(error.response.status, 401);
    t.is(error.response.data.error, "Invalid password");
    t.fail();
  }
});

/*
* Test case for user login with valid credentials
*/
test("user login success with valid credentials", async (t) => {
  try {
    // Attempt to login with valid credentials
    const response = await axios.post("http://localhost:10000/auth/login", {
      email: "test@example.com",
      password: "123",
    });
    // Store the user token for later tests
    // Expecting 200 status code, success message and a valid token
    t.is(response.status, 200);
    t.is(response.data.success, "true");
    t.is(response.data.message, "Login successful");
    t.truthy(response.data.data.token);
  } catch (error) {
    // If login fails, expecting 401 status code and error message "Invalid email or password"
    t.is(error.response.status, 401);
    t.is(error.response.data.error, "Invalid email or password");
    t.fail();
  }
});

