import {
    showDashboard
} from "./dashboard.js";

export async function deleteOffer(event) {
    event.preventDefault();
    const id = event.target.getAttribute('data-id');

    let deletedContent = await fetch(`http://localhost:3030/data/offers/${id}`, {
        method: 'delete',
        headers: {
            'X-Authorization': `${localStorage.getItem('authToken')}`
        },
    });

    if (deletedContent.status === 200 || deletedContent.status === 201) {
        showDashboard()

    }

}