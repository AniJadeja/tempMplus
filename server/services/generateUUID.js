/*
* server/services/generateUUID.js
*
* Copyright (C) 2024 Anirudhdhsinh Jadeja - All Rights  Reserved
* You may use and modify the code to support the needs of Mplus
* Application. You  may  add your name  as the author under the
* original author name.
*
* Under  no  circumstances  the  code  should be distributed to
* anyone who is not  a part  of Mplus  application  development
* team.
*
* @originalAuthor Anirudhdhsinh Jadeja
* Version 1.0.0.0
* @application mplus-admin-server
*/
const { uuidv7 } = require('uuidv7');

// Function to generate UUID
const getUID = () => {
    return uuidv7();
}

// Export the function
module.exports = { getUID };
