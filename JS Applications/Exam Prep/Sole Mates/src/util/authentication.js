import {
    navBar
} from "../nav.js";
import {
    dashboardView
} from "../views/dashboardView.js";

export async function loginCall(data) {
    let request = await fetch(`http://localhost:3030/users/login`, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    let response = await request.json()

    const authToken = response.accessToken;
    sessionStorage.setItem('authToken', authToken);
    sessionStorage.setItem('email', response.email);
    sessionStorage.setItem('ownerID', response._id);
    if (request.status === 200 || request.status === 201) {
        navBar()
        dashboardView()
    } else {
        document.getElementById('login-form').reset();
        window.alert('Wrong Email or Password')
        throw new Error('Wrong Email or Password')
    }
}

export async function registerCall(data) {
    let request = await fetch('http://localhost:3030/users/register', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    let response = await request.json()

    const authToken = response.accessToken;
    sessionStorage.setItem('authToken', authToken);
    sessionStorage.setItem('email', response.email);
    sessionStorage.setItem('ownerID', response._id);
    if (request.status === 200 || request.status === 201) {
        navBar()
        dashboardView()

    } else {
        document.getElementById('login-form').reset();
        window.alert('Wrong Email or Password')
        throw new Error('Wrong Email or Password')
    }
}

export async function logoutCall(event) {
    let data = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': `${sessionStorage.getItem('authToken')}`
        }
    });

    sessionStorage.clear();
    location.reload()
}