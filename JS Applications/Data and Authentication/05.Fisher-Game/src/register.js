const formElement = document.getElementById('register-form');

formElement.addEventListener('submit', submitRegister)


async function submitRegister(event) {
    event.preventDefault();
    const dataForm = new FormData(event.target);

    const data = Object.fromEntries(dataForm.entries());

    let dataToPost = {};
    dataToPost.email = data.email;
    dataToPost.password = data.password;

    let registered = await fetch('http://localhost:3030/users/register', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(dataToPost)
    })
    let response = await registered.json()

    const authToken = response.accessToken;
    localStorage.setItem('authToken', authToken);
}

const buttonLogout = document.getElementById('logout');
buttonLogout.addEventListener('click', async event => {

    let data = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': `${localStorage.getItem('authToken')}`
        }
    });

    localStorage.clear();
})