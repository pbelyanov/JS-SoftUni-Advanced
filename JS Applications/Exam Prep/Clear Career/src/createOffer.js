import {
    showDashboard
} from "./dashboard.js";
import {
    createPage
} from "./views/createPage.js";

export async function createOffer(event) {
    createPage()

    const host = "http://localhost:3030"
    // let formElement = document.getElementsByClassName('create-form')[0];
    const formElement = document.getElementById('create').getElementsByTagName('form')[0];

    console.log(formElement)

    formElement.addEventListener('submit', async event => {
        event.preventDefault();

        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());

        for (let row in data) {
            if (data[row] === '') {
                throw new Error('All fields are required!')
            }
        }

        console.log(data)

        let newData = await fetch(`${host}/data/offers`, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': `${localStorage.getItem('authToken')}`
            },
            body: JSON.stringify(data)
        })
        let response = await newData.json();

        if (newData.status === 200 || newData.status === 201) {
            showDashboard()

        } else {
            throw new Error('Error')
        }
    })
}