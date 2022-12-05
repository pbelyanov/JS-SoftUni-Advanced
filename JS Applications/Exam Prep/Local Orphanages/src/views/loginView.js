import {
    html,
    render
} from "../../node_modules/lit-html/lit-html.js"

export function loginView(event) {


    const loginForm = () => html `<section id="login-page" class="auth">
    <form id="login">
        <h1 class="title">Login</h1>

        <article class="input-group">
            <label for="login-email">Email: </label>
            <input type="email" id="login-email" name="email">
        </article>

        <article class="input-group">
            <label for="password">Password: </label>
            <input type="password" id="password" name="password">
        </article>

        <input type="submit" class="btn submit-btn" value="Log In">
    </form>
</section>`

    const main = document.getElementById('main-content')

    render(loginForm(), main)
}