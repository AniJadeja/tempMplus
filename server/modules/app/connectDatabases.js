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
// Libraries
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const { FORMS_DATABASE_URI, USERS_DATABASE_URI } = require("@config");

(async () => {
    await dbManager.connectToDatabase(USERS_DATABASE_URI, 'users');
    await dbManager.connectToDatabase(FORMS_DATABASE_URI, 'forms');
})();


