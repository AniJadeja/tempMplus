/*
 * ./server/features/signup/controller/signup.js
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

const { ErrorX } = require("@utils");
const { signup } = require("../database/methods");
/*
* Export the signup function
*/
const signupUser = async (req, res) => {
    try {
        // Get the user data
        const email = req.body.email;
        const password = req.body.password

        console.log("signup controller => ",email);
        console.log("signup controller => ",password);
        // Check if the user already exists
        const user = await signup(email, password);
        console.log("signup controller => ",user);
        // Return the user data
        return res.status(200).json(user);
    } catch (error) {
        // Return the error
        console.log("Signup Controller => ", error);
        res.status(400).json({ error: error.message });
    }
}




module.exports = {
  signupUser
}