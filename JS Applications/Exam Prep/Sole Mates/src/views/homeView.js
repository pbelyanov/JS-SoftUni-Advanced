export function homePage() {
    document.getElementsByTagName('main')[0].innerHTML = ''
    const section = document.createElement('section');
    section.setAttribute('id', 'home');

    section.innerHTML = `          <h1>Welcome to Sole Mates</h1>
    <img src="./images/home.jpg" alt="home" />
    <h2>Browse through the shoe collectibles of our users</h2>
    <h3>Add or manage your items</h3>`

    document.getElementsByTagName('main')[0].appendChild(section)
}