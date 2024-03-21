const { authenticate } = require('./authenticateJWT');
const { signJWT } = require('./signJWT');

module.exports = {
    authenticate,
    signJWT,
    };