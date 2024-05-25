/*
 * ./server/features/form/database/index.js
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

const {
  connectToFormDatabase,
  setFormModel,
  getFormModel,
} = require("./model/form");

/*
 * Export the model methods
 */
module.exports = {
  connectToFormDatabase,
  setFormModel,
  getFormModel,
};
