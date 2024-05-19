/*
 * ./server/modules/database/dbManager.js
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
 * @application mplus-admin-server
 */

// Libraries
const mongoose = require('mongoose');

// Connection object
const connections = {};

/**
 * Connect to the database
 * @param {string} uri
 * @param {string} name
 */
const connectToDatabase = async (uri, name) => {
    if (connections[name]) {
        return connections[name];
    }

    const connection = await mongoose.createConnection(uri, {
    });

    connections[name] = connection;
   // console.log(`Connected to ${name} database`);

    return connection;
};

/**
 * Get the connection object
 * @param {string} name
 */
const getConnection = (name) => {
    return connections[name];
};


// Export the module
module.exports = {
    connectToDatabase,
    getConnection,
};
