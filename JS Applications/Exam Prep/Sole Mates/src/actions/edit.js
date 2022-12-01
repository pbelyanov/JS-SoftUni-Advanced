import {
    getRequest,
    postRequest,
    putRequest
} from "../util/api.js";
import {
    dashboardView
} from "../views/dashboardView.js";
import {
    showDetails
} from "../views/detailsView.js";
import {
    editView
} from "../views/editView.js";


export async function edit(event) {
    event.preventDefault();
    editView()

    const URL = `http://localhost:3030/data/shoes/`;
    const ID = event.target.getAttribute('data-id');

    const data = await getRequest(URL, ID)
    console.log(data)


    document.getElementsByName('brand')[0].value = data.brand;
    document.getElementsByName('model')[0].value = data.model;
    document.getElementsByName('imageUrl')[0].value = data.imageUrl;
    document.getElementsByName('release')[0].value = data.release;
    document.getElementsByName('designer')[0].value = data.designer;
    document.getElementsByName('value')[0].value = data.value;

    const formElement = document.getElementsByTagName('form')[0];

    formElement.addEventListener('submit', async event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const dataObject = Object.fromEntries(dataForm.entries());
        for (let row in dataObject) {
            if (dataObject[row] === '') {
                throw new Error('All fields are required')
            }
        }
        await putRequest(URL, ID, dataObject);
        dashboardView()
    })
}