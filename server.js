/*
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

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use("/ping", (req,res)=>{
    res.status(200).json({message:"Mplus pinged.."})
});

const req = {
    get: function(headerName) {
      // return the value of the specified header
      console.log("headerName :",headerName)
      return `local${headerName}:10000`;
    },
    protocol: "http"
  };


app.listen(10000, () => {

    // print the server url
    const hostname = req.get("host");
    const protocol = req.protocol;
    console.clear();
    console.log(`Server is running on ${protocol}://${hostname}`);
  });
