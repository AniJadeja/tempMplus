/*
 * ./server/features/login/database/user.js
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

const { user } = require("../model");

const login = async (userEmail, password) => {
    try {
        // Check if the email exists
        if (!user.email === userEmail) {
        throw new Error("Invalid email");
        }
    
        // Check if the password is correct
        const isMatch = password === user.password;
        if (!isMatch) {
        throw new Error("Invalid password");
        }
    
        // Generate JWT token
        const token = jwt.sign(
        {
            email: user.email,
        },
        JWT_SECRET
        );
    
        const response = {
        success : "true",
        message : "Login successful",
        data : {
            token : token
        },
        };
        return response;
    } catch (error) {
        return { error: error.message };
    }
    };

module.exports = {
    login
    };