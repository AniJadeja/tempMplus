/*
* server/modules/helmet/index.js
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

// Libraries
const helmetLib = require('helmet');


/*
* Helmet middleware
* it is a collection of 14 smaller middleware functions that set security-related HTTP headers
* used to secure Express apps by setting various HTTP headers
*/
const helmet = helmetLib({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
    }
  },
  dnsPrefetchControl: { allow: true },
  expectCt: { enforce: true, maxAge: 30 },
  frameguard: { action: 'deny' },
  hsts: { maxAge: 60 },
  ieNoOpen: true,
  noSniff: true,
  permittedCrossDomainPolicies: { permittedPolicies: 'none' },
  referrerPolicy: { policy: 'no-referrer' },
  xssFilter: true,
  // The following middleware function is not enabled by default
  noCache: true
})

/*
* Export the module
*/
module.exports = helmet