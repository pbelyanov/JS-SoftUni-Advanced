export async function login(event) {
    const urlToRegister = 'http://localhost:3030/users/login'

    const formToLogin = document.getElementById('login-form');

    formToLogin.addEventListener('submit', async event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());

        console.log(data)

        let request = await fetch(`${urlToRegister}`, {
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
}