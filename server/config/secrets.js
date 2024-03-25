/*
* This file holds the secrets for the application.
*/

// JWT Secret for jwt token signing and verification
const JWT_SECRET = process.env.JWT_SECRET

/*
* Export the secrets
*/
module.exports = { JWT_SECRET } 