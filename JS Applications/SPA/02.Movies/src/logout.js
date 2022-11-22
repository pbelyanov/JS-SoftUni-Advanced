export async function logout(event) {
    let data = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': `${localStorage.getItem('authToken')}`
        }
    });

    localStorage.clear();
    location.reload()
}