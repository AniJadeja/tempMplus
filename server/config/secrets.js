/*
* This file holds the secrets for the application.
*/

// JWT Secret for jwt token signing and verification
const jwt = process.env.JWT_SECRET

// DATABASE_URI for the database connection
const db_uri = process.env.DATABASE_URI

/*
* Export the secrets
*/
module.exports = { jwt, db_uri} 