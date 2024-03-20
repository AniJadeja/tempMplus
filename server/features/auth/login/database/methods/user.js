/*

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email exists
    if (!user.email === email) {
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
    res.status(200);
    res.json(response);
    res.send();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
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