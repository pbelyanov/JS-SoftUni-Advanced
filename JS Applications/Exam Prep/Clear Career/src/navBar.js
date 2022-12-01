import {
    login
} from "./login.js";
import {
    register
} from "./register.js";
import {
    logout
} from "./logout.js";
import {
    homePage
} from "./homePage.js";
import {
    showDashboard
} from "./dashboard.js";
import {
    createOffer
} from "./createOffer.js";


export function navBar(event) {
    if (!localStorage.email) {
        document.getElementsByClassName('user')[0].style = 'display:none';
        document.getElementsByClassName('guest')[0].style = 'display:block';
    } else {
        document.getElementsByClassName('user')[0].style = 'display:block';
        document.getElementsByClassName('guest')[0].style = 'display:none';
    }

    const loginButton = document.getElementsByClassName('guest')[0].getElementsByTagName('a')[0];
    const registerButton = document.getElementsByClassName('guest')[0].getElementsByTagName('a')[1];
    const logoButton = document.getElementById('logo')
    logoButton.href = '#'
    const logoutButton = document.getElementsByClassName('user')[0].getElementsByTagName('a')[1];
    const dashboardButton = document.getElementsByTagName('nav')[0].getElementsByTagName('a')[0];
    const createOfferButton = document.getElementsByClassName('user')[0].getElementsByTagName('a')[0];


    loginButton.addEventListener('click', login);
    registerButton.addEventListener('click', register);
    logoutButton.addEventListener('click', logout);
    logoButton.addEventListener('click', homePage);
    dashboardButton.addEventListener('click', showDashboard)
    createOfferButton.addEventListener('click', createOffer)

}