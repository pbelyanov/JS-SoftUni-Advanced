import {
    postRequest
} from "../util/api.js";
import {
    createView
} from "../views/createView.js";
import {
    dashboardView
} from "../views/dashBoardView.js";

export async function addNewAlbum(event) {
    createView()
    const URL = `http://localhost:3030/data/albums`
    const formElement = document.getElementsByClassName('create-form')[0];

    formElement.addEventListener('submit', async event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());
        for (let row in data) {
            if (data[row] === '') {
                throw new Error('All fields are required')
            }
        }

        await postRequest(URL, data);
        dashboardView();
    })
}