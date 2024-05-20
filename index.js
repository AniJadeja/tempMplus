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
const { initiateDatabaseConnection, app } = require("@app");
const { PORT } = require("@config")


let UserModel;

initiateDatabaseConnection().then((connectionStatus) => {
// const getUserModel = require("@features/auth/database/model/user.js");
 // (async () => { UserModel = await getUserModel(); })();
  if (!connectionStatus) {
    console.error("server => index.js : Database connection failed...");
    process.exit(1);
  }
  else {
    const req = {
      get: function(headerName) {
        // return the value of the specified header
        console.log("headerName :",headerName)
        return `local${headerName}:${PORT}`;
      },
      protocol: "http"
    };
  
    app.listen(PORT, async () => {
  
      // print the server url
      const hostname = req.get("host");
      const protocol = req.protocol;
     // console.clear();
      console.log(`Server is running on ${protocol}://${hostname}`);
      // try {
      //   const users = await UserModel.find({});
      //   console.log("Users:", users);
      // } catch (err) {
      //   console.error("Error fetching users:", err);
      // }
    });
  }
  
});



