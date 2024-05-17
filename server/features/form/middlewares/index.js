/*
 * ./server/features/form/middlewares/index.js
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
const services = require("@services");
const utils = require("@utils");
const ErrorX = utils.ErrorX;

const formMiddleware = async (req, res, next) => {
    try {
        next();
    } catch (error) {
        next(error);
    }
}

/*
* Export the functions
*/
module.exports = {
 
    formMiddleware
};
