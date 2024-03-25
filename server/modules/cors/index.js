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

// Libraries
const corsLib = require("cors");

/* 
* Cors options
* Cors provides a Connect/Express middleware that can be used to 
* enable CORS with various options.
*/
const corsOptions = {

    // Only allow requests from the mentioned origin
    origin: "http://localhost:3000",

    // Allow the client to send the following headers
    optionsSuccessStatus: 204,

    // Allow the client to send the following headers
    credentials: true,

    // Allow the client to send the following headers
    methods: "GET, POST",

    // Allow the client to send the following headers
    allowedHeaders: "Content-Type, Authorization",

    // Allow the client to send the following headers
    preflightContinue: false,

    // Allow the client to send the following headers
    maxAge: 3600,

    // Allow the client to send the following headers
    preflight: false,
};

// Export the cors
const cors = corsLib(corsOptions);


/*
* Export the module
*/
module.exports =  cors
