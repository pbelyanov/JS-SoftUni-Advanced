import {
    getRequest,
    putRequest
} from "../util/api.js";
import {
    dashboardView
} from "../views/dashboardView.js";
import {
    editView
} from "../views/editView.js";

export async function edit(event) {
    editView();
    let currentID = event.target.getAttribute('data-id');
    const URL = `http://localhost:3030/data/posts/`;
    const data = await getRequest(URL, currentID);
    console.log(data)
    document.getElementById('title').value = data.title;
    document.getElementById('description').value = data.description;
    document.getElementById('imageUrl').value = data.imageUrl;
    document.getElementById('address').value = data.address;
    document.getElementById('phone').value = data.phone;

    const formElement = document.getElementById('edit');

    formElement.addEventListener('submit', async event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const dataToSend = Object.fromEntries(dataForm.entries());

        for (let row in dataToSend) {
            if (dataToSend[row] === '') {
                throw new Error('All fields are required')
            }
        }

        await putRequest(URL, currentID, dataToSend);
        dashboardView();
    })
}