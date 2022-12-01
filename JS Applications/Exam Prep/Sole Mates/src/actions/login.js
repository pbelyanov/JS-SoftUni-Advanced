import {
    loginView
} from "../views/loginView.js";

import {
    loginCall
} from "../util/authentication.js";
import {
    dashboardView
} from "../views/dashboardView.js";

import {
    loginViewTest
} from "../views/login viewTest.js";

export function login(event) {
    loginViewTest()
    const formToLogin = document.getElementById('login').getElementsByTagName('form')[0];

    console.log(formToLogin)

    formToLogin.addEventListener('submit', async event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());


        for (let row in data) {
            if (data[row] === '') {
                window.alert('All fields are required');
                throw new Error('All fields are required');
            }
        }

        loginCall(data);
    })
}