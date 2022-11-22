// Taking info from form:
let formElement = document.getElementById('form-table');

formElement.addEventListener('submit', event => {
    event.preventDefault();
    const dataForm = new FormData(event.target);

    const data = Object.fromEntries(dataForm.entries());
})

// Login request

formToLogin.addEventListener('submit', async event => {
    event.preventDefault();
    const dataForm = new FormData(event.target);

    const data = Object.fromEntries(dataForm.entries());

    let request = await fetch(`URL`, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    let response = await request.json()
    const authToken = response.accessToken;
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('email', response.email);
    localStorage.setItem('ownerID', response._id);
    if (request.status === 200 || request.status === 201) {
        location.href = `index.html`

    } else {
        document.getElementById('login-form').reset();
        throw new Error('Wrong Email of Password')
    }
})

// Register request


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

// Post Request

let newData = await fetch(`http://localhost:3030/jsonstore/collections/students`, {
    method: 'post',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(data)
})

// Delete Request

let deletedContent = await fetch(`http://localhost:3030/data/catches/${dataID}`, {
    method: 'delete',
    headers: {
        'X-Authorization': `${localStorage.getItem('authToken')}`
    },
});

// Put Request


let name = await fetch(`http://localhost:3030/data/catches/${dataID}`, {
    method: 'put',
    headers: {
        'content-type': 'application/json',
        'X-Authorization': `${localStorage.getItem('authToken')}`
    },
    body: JSON.stringify(newInfo)
})

// Get Request

let response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`);
let data = await response.json();

// Logout Request

const buttonLogout = document.getElementById('logout');
buttonLogout.addEventListener('click', async event => {

    let data = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': `${localStorage.getItem('authToken')}`
        }
    });

    localStorage.clear();
    location.reload()
})