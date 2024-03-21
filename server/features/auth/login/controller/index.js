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

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const response = await login(email, password);
    if (!response) {
      throw new Error("Invalid email or password");
    }

    res.status(200);
    res.json(response);
    res.send();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
