import {
    html,
    render
} from "../../node_modules/lit-html/lit-html.js"

export function registerView(event) {


    const registerForm = () => html `
    <section id="register-page" class="auth">
    <form id="register">
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>`

    const main = document.getElementById('main-content')
    render(registerForm(), main);
}