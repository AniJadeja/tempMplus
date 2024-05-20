/*
* /server/features/form/Route/index.js
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
const express = require('express');
const { newForm, getRequestedForm } = require('../controller');
const formRouter = express.Router();
const { formMiddleware } = require('../middlewares');

// Routes
formRouter.get("/", formMiddleware, (req, res) => getRequestedForm(req, res));
formRouter.post("/", formMiddleware, (req, res) => newForm(req, res));
formRouter.put("/", formMiddleware, (req, res) => updateForm(req, res));
formRouter.delete("/", formMiddleware, (req, res) => deleteForm(req, res));


/*
* Export the router
*/
module.exports = { formRouter };

 