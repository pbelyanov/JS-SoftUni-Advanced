import {
    loginCall
} from "../util/authentication.js";
import {
    loginView
} from "../views/loginVew.js";

export async function login(event) {
    loginView();
    const URL = `http://localhost:3030/users/login`

    const formElement = document.getElementsByClassName('login-form')[0];

    formElement.addEventListener('submit', async event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());
        for (let row in data) {
            if (data[row] === '') {
                throw new Error('All fields are required.')
            }
        }
        await loginCall(URL, data)
    })
}