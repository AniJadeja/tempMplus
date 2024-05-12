/*
* This file holds the secrets for the application.
*/

// JWT Secret for jwt token signing and verification
const JWT_SECRET = process.env.JWT_SECRET

// DATABASE_URI for the database connection
const DATABASE_URI = process.env.DATABASE_URI

/*
* Export the secrets
*/
module.exports = { JWT_SECRET , DATABASE_URI} 