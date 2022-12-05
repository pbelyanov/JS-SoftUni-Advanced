import {
    logoutCall
} from "../util/authentication.js";
import {
    dashboardView
} from "../views/dashboardView.js";
import {
    myPosts
} from "../views/myPostsView.js";
import {
    createPost
} from "./createPost.js";
import {
    login
} from "./login.js";
import {
    register
} from "./register.js";

export async function nav(event) {
    if (!sessionStorage.email) {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    } else {
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
    }

    const loginButton = document.getElementById('guest').getElementsByTagName('a')[0];
    const registerButton = document.getElementById('guest').getElementsByTagName('a')[1];

    loginButton.addEventListener('click', login)
    registerButton.addEventListener('click', register)

    const logoutButton = document.getElementById('user').getElementsByTagName('a')[2];
    logoutButton.addEventListener('click', logoutCall);

    const createPostButton = document.getElementById('user').getElementsByTagName('a')[1];
    createPostButton.addEventListener('click', createPost)

    const dashboardButton = document.getElementsByTagName('nav')[0].getElementsByTagName('a')[0];
    dashboardButton.addEventListener('click', dashboardView)

    const myPostsButton = document.getElementById('user').getElementsByTagName('a')[0];
    myPostsButton.addEventListener('click', myPosts)

}