import {
    getRequest,
    putRequest
} from "../util/api.js";
import {
    dashboardView
} from "../views/dashBoardView.js";
import {
    editView
} from "../views/editView.js";

export async function edit(event) {
    event.preventDefault();
    editView();
    const URL = `http://localhost:3030/data/albums/`
    const ID = event.target.getAttribute('data-id');

    const data = await getRequest(URL, ID)
    document.getElementById('album-singer').value = data.singer;
    document.getElementById('album-album').value = data.album;
    document.getElementById('album-img').value = data.imageUrl;
    document.getElementById('album-release').value = data.release;
    document.getElementById('album-label').value = data.label;
    document.getElementById('album-sales').value = data.sales;

    let formElement = document.getElementsByClassName('edit-form')[0];

    formElement.addEventListener('submit', async event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());

        await putRequest(URL, ID, data);
        dashboardView();
    })

}