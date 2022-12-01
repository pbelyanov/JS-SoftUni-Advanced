export async function getRequest(URL, ID) {
    let response = await fetch(`${URL}${ID}`);
    let data = await response.json();
    return data;
}

export async function putRequest(URL, ID, data) {
    const response = await fetch(`${URL}${ID}`, {
        method: 'put',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': `${sessionStorage.getItem('authToken')}`
        },
        body: JSON.stringify(data)
    })
    return response;
}

export async function postRequest(URL, data) {
    const newData = await fetch(`${URL}`, {
        method: 'post',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': `${sessionStorage.getItem('authToken')}`

        },
        body: JSON.stringify(data)
    })
    return newData
}

export async function deleteRequest(URL, ID) {
    let deletedContent = await fetch(`${URL}${ID}`, {
        method: 'delete',
        headers: {
            'X-Authorization': `${sessionStorage.getItem('authToken')}`
        },
    });
}