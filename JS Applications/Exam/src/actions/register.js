import {
    registerCall
} from "../util/authentication.js";
import {
    registerView
} from "../views/registerView.js";

export async function register() {
    registerView();
    const URL = `http://localhost:3030/users/register`


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
        await registerCall(URL, data)
    })
}