/*
 * ./server/features/protectedFeature/middlewares/index.js
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
const services = require("@services");

const verifyToken = async (req, res, next) => {
  try {
    
    const authorization  =  req.header('Authorization').replace('Bearer ', '');
    if (!authorization) {
      throw new Error("Token not found"); 
    }
    const response = await services.authenticate(authorization);
    if (!response) {
      throw new Error("Invalid token");
    }
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = {
  verifyToken,
};
