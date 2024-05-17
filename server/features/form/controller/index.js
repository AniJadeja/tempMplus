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
const createForm = async (req, res) => {
   res.status(200).send({ message: "Create Form reached.." });
};


const getForm = async (req, res) => {
    res.status(200).send({ message: "Get Form reached.." });
    };

const updateForm = async (req, res) => {
    res.status(200).send({ message: "Update Form reached.." });
    };

const deleteForm = async (req, res) => {
    res.status(200).send({ message: "Delete Form reached.." });
    }

module.exports = { createForm, getForm, updateForm, deleteForm};