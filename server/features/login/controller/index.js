/*
* ./server/features/login/controller/index.js
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
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Simulating user data (replace this with your actual user retrieval logic)
    const user = { email: 'test@example.com', password: '123' }; // Hashed password: 'password'

    // Check if the email exists
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Check if the password is correct
    const isMatch = password === user.password;
    if (!isMatch) {
      throw new Error('Invalid email or password');
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);

    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
