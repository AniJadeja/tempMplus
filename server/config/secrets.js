/*
* This file holds the secrets for the application.
*/

// JWT Secret for jwt token signing and verification
const jwt = process.env.JWT_SECRET

// DATABASE_URI for the database connection
const db_uri = process.env.DATABASE_URI

// DATABASE_URI for the Users database connection
const db_uri_users = process.env.USERS_DATABASE_URI

// DATABASE_URI for the Forms database connection
const db_uri_forms = process.env.FORMS_DATABASE_URI

/*
* Export the secrets
*/
module.exports = { jwt, db_uri, db_uri_users, db_uri_forms} 