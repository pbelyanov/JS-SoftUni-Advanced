import {
    addPair
} from "./actions/addPair.js"
import {
    login
} from "./actions/login.js"
import {
    register
} from "./actions/register.js"
import {
    logoutCall
} from "./util/authentication.js"
import {
    dashboardView
} from "./views/dashboardView.js"
import {
    homePage
} from "./views/homeView.js"

export function navBar(event) {
    if (!sessionStorage.email) {
        document.getElementsByClassName('user')[0].style.display = 'none'
        document.getElementsByClassName('guest')[0].style.display = 'block'

    } else {
        document.getElementsByClassName('user')[0].style.display = 'block'
        document.getElementsByClassName('guest')[0].style.display = 'none'
    }

    let loginButton = document.getElementsByClassName('guest')[0].getElementsByTagName('a')[0];
    let registerButton = document.getElementsByClassName('guest')[0].getElementsByTagName('a')[1];
    let logoutButton = document.getElementsByClassName('user')[0].getElementsByTagName('a')[1];
    let dashboardButton = document.getElementsByTagName('nav')[0].getElementsByTagName('a')[0];
    const addPairButton = document.getElementsByClassName('user')[0].getElementsByTagName('a')[0];
    const logoButton = document.getElementById('logo');

    logoutButton.addEventListener('click', logoutCall);
    loginButton.addEventListener('click', login);
    registerButton.addEventListener('click', register);
    dashboardButton.addEventListener('click', dashboardView);
    addPairButton.addEventListener('click', addPair);
    logoButton.addEventListener('click', homePage)


}