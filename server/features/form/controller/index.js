/*
 * ./server/features/form/controller/index.js
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

/*
 * export the createForm controller
 */

const FormModel = require("../formModel/formModel");
const { createForm } = require("../database/methods/form"); 

const createForm = async (req, res) => {
  const {
    schemaVersion,
    formId,
    formName,
    formDescription,
    formType,
    formStatus,
    formVersion,
    formFields,
    createdBy,
    updatedBy,
    metadata,
  } = req.body;

  const form = new FormModel(
    schemaVersion,
    formId,
    formName,
    formDescription,
    formType,
    formStatus,
    formVersion,
    formFields,
    createdBy,
    updatedBy,
    metadata
  );

  try {
    const response = await createForm(form);
    res.status(200).send(response);
  }
    catch (error) {
        res.status(400).send({ error: error.message });
    }

 // res.status(200).send({ message: "Create Form reached.." });
};

const getForm = async (req, res) => {
  res.status(200).send({ message: "Get Form reached.." });
};

const updateForm = async (req, res) => {
  res.status(200).send({ message: "Update Form reached.." });
};

const deleteForm = async (req, res) => {
  res.status(200).send({ message: "Delete Form reached.." });
};

module.exports = { createForm, getForm, updateForm, deleteForm };
