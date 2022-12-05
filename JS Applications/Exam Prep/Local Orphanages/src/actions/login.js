import {
    loginView
} from "../views/loginView.js";

import {
    loginCall
} from "../util/authentication.js";

export async function login(event) {
    loginView()

    const URL = `http://localhost:3030/users/login`

    const formElement = document.getElementById('login');

    formElement.addEventListener('submit', async event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());

        for (const row in data) {
            if (data[row] === '') {
                throw new Error('All fields are required')
            }
        }

        loginCall(URL, data)
    })
}