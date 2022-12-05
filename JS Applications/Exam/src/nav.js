import {
    html
} from "../node_modules/lit-html/lit-html.js";
import {
    addNewAlbum
} from "./actions/addNewAlbum.js";
import {
    login
} from "./actions/login.js";
import {
    register
} from "./actions/register.js";
import {
    logoutCall
} from "./util/authentication.js";
import {
    dashboardView
} from "./views/dashBoardView.js";
import {
    homePageView
} from "./views/homePageView.js";

export function nav() {
    if (sessionStorage.email === undefined) {
        document.getElementsByClassName('user')[0].style.display = 'none'
        document.getElementsByClassName('guest')[0].style.display = 'block'
    } else {
        document.getElementsByClassName('user')[0].style.display = 'block'
        document.getElementsByClassName('guest')[0].style.display = 'none'
    }

    const loginButton = document.getElementsByClassName('guest')[0].getElementsByTagName('a')[0];
    const registerButton = document.getElementsByClassName('guest')[0].getElementsByTagName('a')[1];
    const addAlbumButton = document.getElementsByClassName('user')[0].getElementsByTagName('a')[0];
    const logoutButton = document.getElementsByClassName('user')[0].getElementsByTagName('a')[1];
    const dashboardButton = document.getElementsByTagName('nav')[0].getElementsByTagName('a')[0];
    const homeButton = document.getElementById('logo');

    homeButton.addEventListener('click', homePageView);
    loginButton.addEventListener('click', login);
    registerButton.addEventListener('click', register);
    logoutButton.addEventListener('click', logoutCall);
    dashboardButton.addEventListener('click', dashboardView);
    addAlbumButton.addEventListener('click', addNewAlbum);

}