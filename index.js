/*
* index.js
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
require('dotenv').config();
require('module-alias/register');

// Variables
const { app } = require("@app");
const { PORT } = require("@config")

// Request object to get the hostname and protocol
const req = {
    get: function(headerName) {
      // return the value of the specified header
      console.log("headerName :",headerName)
      return `local${headerName}: ${PORT}`;
    },
    protocol: "http"
  };


// Start the server
app.listen(PORT, () => {
  
    // print the server url
    const hostname = req.get("host");
    const protocol = req.protocol;
    console.clear();
    console.log(`Server is running on ${protocol}://${hostname}`);  
});
