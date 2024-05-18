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

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Libraries
const { getConnection } = require("@database");

const { USERS_DATABASE } = require("@config");

// User Schema
const userSchema = new Schema({
    schemaVersion: { type: String, required: true },
    uid: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    dataCollection: { type: String, default: "none"},
    reportCollection: { type: String, default: "none"},
    status:{type: Boolean, default: true},
    updatedBy: { type: String, default: "system" },
    metadata:{type : Object, default: {}}
});


module.exports = () => {
    // connection
    const UsersConnection = getConnection(USERS_DATABASE);
   // console.log("UsersConnection:", UsersConnection);

    // User Model
    const User = UsersConnection.model('User', userSchema);

    return User;
};