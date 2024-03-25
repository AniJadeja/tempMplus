/*
 * server/features/protectedFeature/__tests__/protected.test.js
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
* Test case for user accessing protected route with invalid token
*/
test("user accessed protected route with valid token", async (t) => {
    try {
      // Attempt to access protected route with valid token
      const response1 = await axios.post("http://localhost:10000/auth/login", {
        email: "test@example.com",
        password: "123",
      });
      const response = await axios.get("http://localhost:10000/protected", {
        headers: {
          Authorization: `Bearer ${response1.data.data.token}`,
        },
      });
      // Expecting 200 status code and success message
      t.is(response.status, 200);
      t.is(response.data.message, "Successfully Authenticated..");
    } catch (error) {
      // If access fails, expecting 401 status code
      t.is(error.response.status, 401);
      t.fail();
    }
  });