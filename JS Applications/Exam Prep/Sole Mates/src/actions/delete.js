import {
    deleteRequest
} from "../util/api.js";
import {
    dashboardView
} from "../views/dashboardView.js";

export async function deleteOffer(event) {
    event.preventDefault();
    const URL = `http://localhost:3030/data/shoes/`;
    const ID = event.target.getAttribute('data-id');
    await deleteRequest(URL, ID);
    dashboardView();
}