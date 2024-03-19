/*
* server/modules/__tests__/app.test.js
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
const test = require('ava');
const axios = require('axios');
const pingUrl = 'http://localhost:10000/ping';

test('responds with 200', async t => {
    const response = await axios.get(pingUrl);
    t.is(response.status, 200);
});

test('responds within 200ms', async t => {
    const start = Date.now();
    await axios.get(pingUrl);
    const duration = Date.now() - start;
    t.true(duration < 200);
});

test('responds with expected body', async t => {
    const response = await axios.get(pingUrl);
    t.deepEqual(response.data, { message: 'Mplus pinged..' });
});