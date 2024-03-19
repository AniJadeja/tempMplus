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
* @application MPlus
*/

// Libraries
require('dotenv').config();
require('module-alias/register');

const { app } = require("@app");
const { PORT } = require ("@config")
const  authenticate  = require("./server/features/login/middlewares");
const router = require("./server/features/login/Route");


app.use('/auth', router);

// Protected route example
app.get('/protected', authenticate, (_, res) => {
  res.json({ message: 'Access  granted' });
});



const req = {
    get: function(headerName) {
      // return the value of the specified header
      console.log("headerName :",headerName)
      return `local${headerName}: ${PORT}`;
    },
    protocol: "http"
  };


app.listen(PORT, () => {
  //console.log(require('.server/features/login/controller'));
    // print the server url
    const hostname = req.get("host");
    const protocol = req.protocol;
    console.clear();
    console.log(`Server is running on ${protocol}://${hostname}`);


  
  });
