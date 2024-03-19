const express = require('express');
const authRouter = express.Router();

const { loginRouter } = require('./login');
const loginEP = process.env.LOGIN_END_POINT;


authRouter.post(loginEP, (req, res, next) => {
    console.log('Login endpoint called by authRouter');
    next()
}, loginRouter);

module.exports = { authRouter };