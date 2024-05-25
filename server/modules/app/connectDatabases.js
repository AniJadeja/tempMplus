/*
 * server/modules/app/connectDatabases.js
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
// UserLibraries
const {
  connectToUserDatabase,
  setUserModel,
  getUserModel,
} = require("@features/auth");

const {
  connectToFormDatabase,
  setFormModel,
  getFormModel,
} = require("@features/form");

const connectDB = async () => {
  try {
    // Connect to the users database
    const userModel = await connectToUserDatabase();
    setUserModel(userModel);
    const user = getUserModel();
    if (user) {
      console.log(
        "server => modules => app => connectDatabases : User model connected..."
      );
      console.log(
        "server => modules => app => connectDatabases : User model : ",
        user
      );
    } else {
      console.log(
        "server => modules => app => connectDatabases : User model connection failed..."
      );
      process.exit(1);
    }

    // Connect to the forms database
    const formModel = await connectToFormDatabase();
    setFormModel(formModel);
    const form = getFormModel();

    if (form) {
      console.log(
        "server => modules => app => connectDatabases : Form model connected..."
      );
      console.log(
        "server => modules => app => connectDatabases : Form model : ",
        form
      );
    } else {
      console.log(
        "server => modules => app => connectDatabases : Form model connection failed..."
      );
      process.exit(1);
    }
  } catch (error) {
    console.error("Database connection failed...", error);
  }
};

module.exports = {
  connectDB,
};
