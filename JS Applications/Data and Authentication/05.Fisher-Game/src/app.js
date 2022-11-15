console.log('TODO:// Implement Home functionality');

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