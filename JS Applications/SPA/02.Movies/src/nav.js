import {
    login
} from "./login.js";

import {
    logout
} from "./logout.js";

import {
    register
} from "./register.js";

export function navBar() {

    if (!localStorage.email) {
        document.getElementById('welcome-msg').style = 'display:none';
        document.getElementsByClassName('nav-link')[1].style = 'display:none'
        document.getElementsByClassName('nav-link')[2].style = 'display:block'
        document.getElementsByClassName('nav-link')[3].style = 'display:block'
    } else {
        document.getElementById('welcome-msg').style = 'display:block';
        document.getElementsByClassName('nav-link')[1].style = 'display:block'
        document.getElementsByClassName('nav-link')[2].style = 'display:none'
        document.getElementsByClassName('nav-link')[3].style = 'display:none'
        document.getElementById('welcome-msg').innerHTML = `Welcome, ${localStorage.email}`
    }

    const loginButton = document.getElementsByClassName('nav-link')[2];
    const registerButton = document.getElementsByClassName('nav-link')[3];
    const logoutButton = document.getElementsByClassName('nav-link')[1];

    loginButton.addEventListener('click', event => {
        login();
        document.getElementById('home-page').style = 'display:none';
        document.getElementById('add-movie-button').style = 'display:none';
        document.getElementById('add-movie').style = 'display:none';
        document.getElementById('form-login').style = 'display:block';
        document.getElementById('form-sign-up').style = 'display:none';
        document.getElementById('edit-movie').style = 'display:none';
        document.getElementById('movie').style = 'display:none';
        document.getElementById('movie-example').style = 'display:none';
    })

    registerButton.addEventListener('click', event => {
        register();
        document.getElementById('home-page').style = 'display:none';
        document.getElementById('add-movie-button').style = 'display:none';
        document.getElementById('add-movie').style = 'display:none';
        document.getElementById('form-login').style = 'display:none';
        document.getElementById('form-sign-up').style = 'display:block';
        document.getElementById('edit-movie').style = 'display:none';
        document.getElementById('movie').style = 'display:none';
        document.getElementById('movie-example').style = 'display:none';
    })

    logoutButton.addEventListener('click', event => {
        logout();
    })

}