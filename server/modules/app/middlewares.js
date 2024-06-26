/*
 * server/modules/app/middleware.js
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
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// Server modules
const cors = require("@cors");
const helmet = require("@helmet");

// user Libraries
const { connectDB } = require("./connectDatabases");

// connect the databases
let connectionStatus = false;
const initiateDatabaseConnection = async () => {
  try {
    await connectDB();
    connectionStatus = true;
    console.log(
      "server => modules => app => middleware : Database connection success..."
    );
  } catch (error) {
    connectionStatus = false;
    console.error(
      "server => modules => app => middleware : Database connection failed...");
    console.log("Error : ", error)
    process.exit(1);
  }

  return connectionStatus;
};

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors);
app.use(helmet);

/*
 * Export the app
 */
module.exports = { app, initiateDatabaseConnection };
