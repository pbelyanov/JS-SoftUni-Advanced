import {
    registerView
} from "../views/registerView.js"

import {
    loginCall,
    registerCall
} from "../util/authentication.js"
import {
    dashboardView
} from "../views/dashboardView.js"

export function register(event) {
    registerView()

    const formElement = document.getElementsByTagName('form')[0]

    formElement.addEventListener('submit', event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());


        for (let row in data) {
            if (data[row] === '') {
                window.alert('All fields are required')
                throw new Error('All fields are required')
            }
        }
        registerCall(data);
        dashboardView();
    })
}