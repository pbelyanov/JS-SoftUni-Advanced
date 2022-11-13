function attachEvents() {
    let buttonLoad = document.getElementById('btnLoad');
    let buttonCreate = document.getElementById('btnCreate');

    buttonLoad.addEventListener('click', loadData);
    buttonCreate.addEventListener('click', createData)
}

async function loadData(event) {
    let response = await fetch(`http://localhost:3030/jsonstore/phonebook`);
    let data = await response.json();
    let ul = document.getElementById('phonebook');
    ul.innerHTML = ''
    for (let row in data) {
        let person = data[row].person;
        let phone = data[row].phone;
        let newItem = document.createElement('li')
        newItem.setAttribute('id', `${row}`)
        newItem.textContent = `${person}: ${phone}`;
        let buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Delete';
        buttonDelete.addEventListener('click', deleteData);
        newItem.appendChild(buttonDelete);
        ul.appendChild(newItem);
    }
    console.log(data)
}

async function deleteData(event) {
    let currentID = event.currentTarget.parentNode.getAttribute('id');
    let target = event.currentTarget
    console.log(currentID);
    let deletedData = await fetch(`http://localhost:3030/jsonstore/phonebook/${currentID}`, {
        method: 'delete',
        headers: {
            'content-type': 'application/json'
        },
    })
    target.parentNode.remove()
}

async function createData(event) {
    let person = document.getElementById('person').value;
    let phone = document.getElementById('phone').value;
    let data = {
        person,
        phone
    }
    let newData = await fetch(`http://localhost:3030/jsonstore/phonebook/`, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    loadData();
}

attachEvents();