import {
    deleteRequest
} from "../util/api.js";
import {
    dashboardView
} from "../views/dashBoardView.js";

export async function deletePost(event) {
    event.preventDefault()
    const URL = `http://localhost:3030/data/albums/`
    const ID = event.target.getAttribute('data-id');
    if (confirm('Are you sure you want to delete this album?')) {
        console.log(sessionStorage.getItem('authToken'))
        deleteRequest(URL, ID);
        dashboardView();
    } else {
        // Do nothing!
    }
}