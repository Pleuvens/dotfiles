import { authHeader } from '../Helpers';
import { history } from '../Helpers';

export const userService = {
    login,
    register,
    logout,
    echo
};

const apiUrl = 'http://localhost:8000';

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Egalya-Organisation': 'x',
            'X-Egalya-Appid': 'x',
            'X-Egalya-Token': 'x',
            'X-Egalya-Channel': 'x'
        },
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
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify({
            email: email,
            password: password,
            org: organisation
        })
    };

    return fetch(`${apiUrl}/1/identity`, requestOptions)
                .then(handleResponse)
}

function echo() {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            /*'X-Egalya-Organisation': ,
            'X-Egalya-Appid': ,
            'X-Egalya-Token': ,
            'X-Egalya-Channel':*/
        },
        body: JSON.stringify({
            arguments: ["Hello", "world!"]
        })
    }

    return fetch(`${apiUrl}/1/ledger/contact-cc/echo`, requestOptions)
                .then(handleResponse)
                .then(data => {
                    console.log(data)
                })
}

function logout() {
    localStorage.removeItem('user');
    history.push('/login');
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
