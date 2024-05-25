/*
 * ./server/features/signup/database/model/user.js
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

// User model
//const user = { email: 'test@example.com', password: '123' };

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Libraries
// const { getConnection } = require("@database");

// const { USERS_DATABASE } = require("@config");

const { connectToDatabase, getConnection } = require("@database");
const { USERS_DATABASE, USERS_DATABASE_URI } = require("@config");

// User Schema
const userSchema = new Schema({
  schemaVersion: { type: String, required: true },
  uid: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  dataCollection: { type: String, default: "none" },
  reportCollection: { type: String, default: "none" },
  status: { type: Boolean, default: true },
  updatedBy: { type: String, default: "system" },
  metadata: { type: Object, default: {} },
});

let User = null;

const connectToUserDatabase = async () => {
  // Ensure the database connection is established before getting the connection
  await connectToDatabase(USERS_DATABASE_URI, USERS_DATABASE);

  const UsersConnection = getConnection(USERS_DATABASE);

  if (!UsersConnection) {
    throw new Error("Failed to establish a connection to the USERS_DATABASE");
  }

  User = UsersConnection.model("User", userSchema);
  return User;
};

const setUserModel = (user) => {
  this.User = user;
};

const getUserModel = () => {
  return this.User;
};

/*
 * Export the User model methods
 */

module.exports = {
  connectToUserDatabase,
  setUserModel,
  getUserModel,
};
