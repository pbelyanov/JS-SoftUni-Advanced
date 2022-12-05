import {
    postRequest
} from "../util/api.js";
import {
    createPostView
} from "../views/createPostView.js";
import {
    dashboardView
} from "../views/dashboardView.js";

export async function createPost(event) {
    createPostView();
    const formElement = document.getElementById('create');

    formElement.addEventListener('submit', async event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());

        const URL = `http://localhost:3030/data/posts`

        for (let row in data) {
            if (data[row] === '') {
                throw new Error('All fields are required')
            }
        }
        await postRequest(URL, data)
        dashboardView()
    })
}