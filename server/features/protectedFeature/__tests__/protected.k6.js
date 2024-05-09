import http from 'k6/http';
import { check } from 'k6';


export default function () {
    const loginResponse = http.post('http://localhost:10000/auth/login', {
        email: 'test@example.com',
        password: '123',
    });

    const authHeaders = {
        headers: {
            Authorization: `Bearer ${loginResponse.json('data.token')}`,
        },
    };

    const protectedResponse = http.get('http://localhost:10000/protected', authHeaders);

    check(protectedResponse, {
        'Status is 200': (r) => r.status === 200,
        'Success message is correct': (r) => r.json('data.message') === 'Successfully Authenticated..',
    });

    check(loginResponse, {
        'Status is 200': (r) => r.status === 200,
        'Token is present': (r) => r.json('data.token') !== undefined,
    });
}
