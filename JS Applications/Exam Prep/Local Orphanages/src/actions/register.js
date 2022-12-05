import {
    registerCall
} from "../util/authentication.js";
import {
    registerView
} from "../views/registerView.js";

export async function register(event) {
    registerView();

    const URL = `http://localhost:3030/users/register`

    const formElement = document.getElementById('register');

    formElement.addEventListener('submit', async event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());
        for (const row in data) {
            if (data[row] === '') {
                throw new Error('All fields are required')
            }
        }
        registerCall(URL, data)
    })
}