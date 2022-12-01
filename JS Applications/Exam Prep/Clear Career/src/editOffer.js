import {
    showDashboard
} from "./dashboard.js";
import {
    editPage
} from "./views/editPage.js";

export async function editOffer(event) {
    event.preventDefault()


    editPage()

    const id = event.target.getAttribute('data-id')

    let response = await fetch(`http://localhost:3030/data/offers/${id}`);
    let data = await response.json();

    document.getElementsByClassName('edit-form')[0].getElementsByTagName('input')[0].value = data.title;
    document.getElementsByClassName('edit-form')[0].getElementsByTagName('input')[1].value = data.imageUrl;
    document.getElementsByClassName('edit-form')[0].getElementsByTagName('input')[2].value = data.category;
    document.getElementsByClassName('edit-form')[0].getElementsByTagName('input')[3].value = data.salary;
    document.getElementsByClassName('edit-form')[0].getElementsByTagName('textarea')[0].value = data.description;
    document.getElementsByClassName('edit-form')[0].getElementsByTagName('textarea')[1].value = data.requirements;

    console.log(data)


    const editForm = document.getElementsByClassName('edit-form')[0];

    editForm.addEventListener('submit', async event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());
        data._ownerId = localStorage.ownerID


        for (let row in data) {
            if (data[row] === '') {
                throw new Error('All fields are required!')
            }
        }

        console.log(data)

        let newData = await fetch(`http://localhost:3030/data/offers/${id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': `${localStorage.getItem('authToken')}`
            },
            body: JSON.stringify(data)
        })
        showDashboard()

    })

}