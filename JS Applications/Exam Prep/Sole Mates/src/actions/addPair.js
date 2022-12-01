import {
    postRequest
} from "../util/api.js";
import {
    addPairView
} from "../views/addPairView.js";
import {
    dashboardView
} from "../views/dashboardView.js";

export function addPair(event) {
    addPairView();

    const URL = `http://localhost:3030/data/shoes`;

    const formElement = document.getElementsByTagName('form')[0];

    formElement.addEventListener('submit', async event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());
        for (let row in data) {
            if (data[row] === '') {
                throw new Error('All fields are required')
            }
        }
        await postRequest(URL, data)
        dashboardView()
    })

}