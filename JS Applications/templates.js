// Taking info from form:

event.preventDefault();
const dataForm = new FormData(event.target);

const data = Object.fromEntries(dataForm.entries());

// Login request

let request = await fetch(`http://localhost:3030/users/login`, {
    method: 'post',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(data)
})
let response = await request.json()
const authToken = response.accessToken;
localStorage.setItem('authToken', authToken);