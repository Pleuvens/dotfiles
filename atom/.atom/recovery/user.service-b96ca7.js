import { authHeader } from '../Helpers';
import { history } from '../Helpers';

export const userService = {
    login,
    logout,
    getAll
};

const apiUrl = 'http://localhost:8000';

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password })
    };

    return fetch(`${apiUrl}/users/authenticate`, requestOptions)
                .then(handleResponse)
                .then(user => {
                    localStorage.setItem('user', JSON.stringify(user));
                    return user;
                });
}

function register(email, password, organisation) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password,
            org: organisation
        })
    };

    return fetch(`${apiUrl}/1/identity`)
}

function logout() {
    localStorage.removeItem('user');
    history.push('/login');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
