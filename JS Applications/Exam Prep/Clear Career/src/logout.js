export async function logout(event) {


    let data = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': `${localStorage.getItem('authToken')}`
        }
    })
    let respone = await data.text();
    console.log(respone);

    localStorage.clear();
    location.reload()

}