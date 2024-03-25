/*
* server/modules/app/app.js
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

// Server modules
const cors  = require("@cors");
const { pingEndPoint } = require ("@config");

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors); 
// Routes
app.use("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the home page" });
}
);
app.use(pingEndPoint, (req,res)=>{
    res.status(200).json({message:"Mplus pinged.."})
});



/* 
* Export the app
*/
module.exports = { app } 