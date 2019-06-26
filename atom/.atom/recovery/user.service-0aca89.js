import { authHeader } from '../Helpers';
import { history } from '../Helpers';

export const userService = {
    login,
    register,
    logout,
    echo
};

const apiUrl = 'http://localhost:8080';

function login(email, password, organisation) { /* echo */
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Egalya-Organisation': organisation,
            'X-Egalya-Appid': email,
            'X-Egalya-Token': password,
            'X-Egalya-Channel': organisation + '-channel'
        },
        mode: 'cors',
        body: JSON.stringify({
            arguments: ["Hello", "world!"]
        })
    };

    let user = {
        email: email,
        password: password,
        org: organisation
    }

    return fetch(`${apiUrl}/1/ledger/contact-cc/echo`, requestOptions)
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
        body: JSON.stringify({
            email: email,
            password: password,
            org: organisation
        })
    };

    return fetch(`${apiUrl}/1/identity`, requestOptions)
                .then(handleResponse)
                .then(data => console.log(data))
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
