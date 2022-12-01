export function registerView() {
    document.getElementsByTagName('main')[0].innerHTML = ''
    const section = document.createElement('section');
    section.setAttribute('id', 'register');

    section.innerHTML = `          <div class="form">
    <h2>Register</h2>
    <form class="login-form">
      <input
        type="text"
        name="email"
        id="register-email"
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        id="register-password"
        placeholder="password"
      />
      <input
        type="password"
        name="re-password"
        id="repeat-password"
        placeholder="repeat password"
      />
      <button type="submit">login</button>
      <p class="message">Already registered? <a href="#">Login</a></p>
    </form>
  </div>`

    document.getElementsByTagName('main')[0].appendChild(section)
}