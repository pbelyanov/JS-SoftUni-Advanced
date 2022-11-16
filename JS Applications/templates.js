// Taking info from form:

event.preventDefault();
const dataForm = new FormData(event.target);

const data = Object.fromEntries(dataForm.entries());

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