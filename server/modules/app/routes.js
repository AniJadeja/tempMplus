/*
* server/modules/app/routes.js
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
const { app } = require("./middlewares");
const { pingEndPoint, authEndPoint } = require ("@config");
const { authRouter } = require("@features/auth");



app.use(authEndPoint, authRouter);

// Protected route example
// app.get('/protected', authenticate, (_, res) => {
//   res.json({ message: 'Access  granted' });
// });

app.use(pingEndPoint, (req,res)=>{
    res.status(200).json({message:"Mplus pinged.."})
});


module.exports = { app } 