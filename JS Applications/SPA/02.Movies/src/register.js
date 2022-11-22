export async function register(event) {
    const urlToRegister = 'http://localhost:3030/users/register'

    const formToLogin = document.getElementById('form-sign-up');

    formToLogin.addEventListener('submit', async event => {
        event.preventDefault()

        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());

        console.log(data)

        if (data.email === '') {
            throw new Error('Invalid Email')
        }

        if (data.password.length < 6) {
            throw new Error('Password is too short!')
        }

        if (data.repeatPassword !== data.password) {
            throw new Error('Password does not match')
        }

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
        localStorage.setItem('email', response.email);
        localStorage.setItem('ownerID', response._id);

        if (request.status === 200 || request.status === 201) {
            location.href = `index.html`

        }
    })

}