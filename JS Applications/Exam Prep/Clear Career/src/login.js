import {
    showDashboard
} from "./dashboard.js";
import {
    navBar
} from "./navBar.js";
import {
    loginPage
} from "./views/loginPage.js";



export async function login(event) {
    loginPage()
    const URL = 'http://localhost:3030/users/login'

    // const formToLogin = document.getElementsByClassName('login-form')[1];
    const formToLogin = document.getElementById('login').getElementsByTagName('form')[0];

    console.log(formToLogin)

    formToLogin.addEventListener('submit', async event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());


        for (let row in data) {
            if (data[row] === '') {
                window.alert('Wrong Email of Password')
                throw new Error('All fields are required')
            }
        }
        console.log(data)

        let request = await fetch(`${URL}`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let response = await request.json();

        const authToken = response.accessToken;
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('email', response.email);
        localStorage.setItem('ownerID', response._id);

        if (request.status === 200 || request.status === 201) {
            navBar()
            showDashboard()


        } else {
            document.getElementsByClassName('login-form')[1].reset();
            window.alert('Wrong Email of Password')
            throw new Error('Wrong Email of Password')
        }
    })


}