/*
 * ./server/features/form/database/model/form.js
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

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Libraries
const { getConnection, connectToDatabase } = require("@database");

const { FORMS_DATABASE, FORMS_DATABASE_URI, } = require("@config");

// User Schema
const formSchema = new Schema({
    schemaVersion: { type: String, required: true },
    formId: { type: String, required: true },
    formName: { type: String, required: true },
    formDescription: { type: String, required: true },
    formType: { type: String, required: true },
    formStatus: { type: String, required: true },
    formVersion: { type: String, required: true },
    formFields: { type: Array, required: true },
    createdBy: { type: String, default: "system" },
    updatedBy: { type: String, default: "system" },
    metadata:{type : Object, default: {}}
});


module.exports = async () => {

    await connectToDatabase(FORMS_DATABASE_URI, FORMS_DATABASE);
    // connection
    const FormsConnection = getConnection(FORMS_DATABASE);

    // User Model
    const Form = FormsConnection.model('Form', formSchema);

    return Form;
};