/*
* server/modules/cors/index.js
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

const corsLib = require("cors");

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 204,
    credentials: true,
    methods: "GET, POST",
    allowedHeaders: "Content-Type, Authorization",
    preflightContinue: false,
    maxAge: 3600,
    preflight: false,
};

const cors = corsLib(corsOptions);

module.exports =  cors
