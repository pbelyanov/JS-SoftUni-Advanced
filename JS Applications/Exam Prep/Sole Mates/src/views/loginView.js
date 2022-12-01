export function loginView() {
    document.getElementsByTagName('main')[0].innerHTML = ''
    const section = document.createElement('section');
    section.setAttribute('id', 'login');

    section.innerHTML = `          <div class="form">
    <h2>Login</h2>
    <form class="login-form">
      <input type="text" name="email" id="email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button type="submit">login</button>
      <p class="message">
        Not registered? <a href="#">Create an account</a>
      </p>
    </form>
  </div>`

    document.getElementsByTagName('main')[0].appendChild(section)
}