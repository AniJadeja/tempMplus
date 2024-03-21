const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const signJWT = async (userData) => {
  try {
    const token = jwt.sign(
      {
        user: userData,
      },
      JWT_SECRET
    );
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};


module.exports = { signJWT } ;