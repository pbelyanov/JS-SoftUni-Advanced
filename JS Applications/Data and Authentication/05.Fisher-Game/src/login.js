const formToLogin = document.getElementById('login-form');

formToLogin.addEventListener('submit', async event => {
    event.preventDefault();
    const dataForm = new FormData(event.target);

    const data = Object.fromEntries(dataForm.entries());
    console.log(data)
    let request = await fetch(`http://localhost:3030/users/login`, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    console.log(request)
    let response = await request.json()
    console.log(response);
    const authToken = response.accessToken;
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('email', response.email)
    localStorage.setItem('ownerID', response._id)
    console.log(request.status);
    if (request.status === 200 || request.status === 201) {
        location.href = `index.html`

    } else {
        document.getElementById('login-form').reset();
        throw new Error('Wrong Email of Password')
    }

})