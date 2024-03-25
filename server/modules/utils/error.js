/*
 * ./server/services/signJWT.js
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
 * @application mplus-admin-server
 */

/*
* Custom Error class
* The class extends the Error class 
* and adds the code, message and path properties
* @param {string} code - The error code
* @param {string} message - The error message
*/
class ErrorX extends Error {
    constructor(code, message) {
      super();
      this.code = code;
      this.message = message;
  
      //Extracting the file path from the stack trace
      const stackLines = (new Error()).stack.split('\n');
      // The file path is usually in the second line of the stack trace
      if (stackLines.length >= 3) {
        this.path = stackLines[2].trim().replace(/^at /, '');
      } else {
        this.path = 'Unknown'; // Fallback in case path extraction fails
      }
    }
  }

/*
* Export the class
*/
module.exports = { ErrorX };