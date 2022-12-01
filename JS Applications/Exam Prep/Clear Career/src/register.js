import {
    showDashboard
} from "./dashboard.js";
import {
    navBar
} from "./navBar.js";

import {
    registerPage
} from "./views/registerPage.js";

export async function register(event) {
    registerPage();

    const URL = 'http://localhost:3030/users/register'


    const formToRegister = document.getElementById('register-form')


    console.log(formToRegister)

    formToRegister.addEventListener('submit', async event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());
        console.log(data)

        for (let row in data) {
            if (data[row] === '') {
                window.alert('Wrong Email of Password')
                throw new Error('All fields are required')
            }
        }

        let dataToPost = {};
        dataToPost.email = data.email;
        dataToPost.password = data.password;

        let registered = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataToPost)
        });
        let response = await registered.json();

        const authToken = response.accessToken;
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('email', response.email);
        localStorage.setItem('ownerID', response._id);

        if (registered.status === 200 || registered.status === 201) {
            navBar()
            showDashboard()

        } else {
            document.getElementsByClassName('login-form')[0].reset();
            window.alert('Wrong Email of Password')
            throw new Error('Wrong Email of Password')

        }
    })
}