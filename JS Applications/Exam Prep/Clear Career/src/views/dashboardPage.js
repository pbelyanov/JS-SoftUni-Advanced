export function dashboardPage(event) {
  document.getElementsByTagName('main')[0].innerHTML = '';

  let section = document.createElement('section');
  section.setAttribute('id', 'dashboard');

  section.innerHTML = `          <img
    src="./images/pngkey.com-hunting-png-6697165-removebg-preview.png"
    alt="home"
  />
  <h2>Searching for a job?</h2>
  <h3>The right place for a new career start!</h3>`
  document.getElementsByTagName('main')[0].appendChild(section);

}