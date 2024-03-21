/*
 * server/features/auth/login/__tests__/app.test.js
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

let userToken = "";

test("user login failed with invalid credentials", async (t) => {
  try {
    const response = await axios.post("http://localhost:10000/auth/login", {
      email: "test@example.com",
      password: "1234",
    });
    t.is(response.status, 200);
    t.is(response.data.error, "Invalid password");
  } catch (error) {
    t.is(error.response.status, 401);
    t.is(error.response.data.error, "Invalid password");
  }
});

test("user login success with valid credentials", async (t) => {
  try {
    const response = await axios.post("http://localhost:10000/auth/login", {
      email: "test@example.com",
      password: "123",
    });
    // if (!response) {
    //   t.fail();
    // }
    userToken = response.data.token;
    t.is(response.status, 200);
    t.is(response.data.success, "true");
    t.is(response.data.message, "Login successful");
    t.truthy(response.data.data.token);
  } catch (error) {
    t.is(error.response.status, 401);
    t.is(error.response.data.error, "Invalid email or password");
  }
});

test("user accessed protected route with valid token", async (t) => {
  try {
    const response = await axios.post("http://localhost:10000/protected", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    t.is(response.status, 200);
    t.is(response.data.message, "Successfully Authenticated..");
  } catch (error) {
    t.is(error.response.status, 401);
  }
});
