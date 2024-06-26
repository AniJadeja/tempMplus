/*
 * index.js
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

// Importing the pingEndPoint, authEndPoint and protectedEndPoint from the endpoints.js file
const {
  pingEP: pingEndPoint,
  authEndPoint,
  protectedEP: protectedEndPoint,
  loginEndPoint,
  signupEndPoint,
  protectedFormEP: formEndPoint,
} = require("./endpoints");

// Importing JWT_SECRET and DATABASE_URI from the secrets.js file
const { db_uri, jwt, db_uri_forms, db_uri_users } = require("./secrets");

// Importing the PORT from the .env file
const PORT = process.env.PORT;

// Importing the JWT_SECRET from the secrets.js file
const JWT_SECRET = jwt;

// Importing the DATABASE_URI from the secrets.js file
const DATABASE_URI = db_uri;

// Imporrting the USERS_DATABASE_URI from the secrets.js file
const USERS_DATABASE_URI = db_uri_users;

// Importing the FORMS_DATABASE_URI from the secrets.js file
const FORMS_DATABASE_URI = db_uri_forms;

// Importing Users database and Forms from the databases.js file
const { USERS_DATABASE, FORMS_DATABASE } = require("./databases");

/*
 * Export the configuration variables
 */
module.exports = {
  authEndPoint,
  protectedEndPoint,
  pingEndPoint,
  PORT,
  JWT_SECRET,
  DATABASE_URI,
  FORMS_DATABASE_URI,
  USERS_DATABASE_URI,
  loginEndPoint,
  signupEndPoint,
  formEndPoint,
  USERS_DATABASE,
  FORMS_DATABASE,
};
