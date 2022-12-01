import {
    deleteOffer
} from "./deleteOffer.js";
import {
    editOffer
} from "./editOffer.js";
import {
    detailsPage
} from "./views/detailsPage.js";

export async function showDetails(event) {
    event.preventDefault();
    detailsPage();
    const id = event.target.getAttribute('data-id');

    let response = await fetch(`http://localhost:3030/data/offers/${id}`);
    let data = await response.json();

    document.getElementById('details-title').textContent = data.title;
    document.getElementById('categories').textContent = data.category;
    document.getElementById('salary-number').textContent = data.salary;
    document.getElementById('details-description').getElementsByTagName('span')[0].textContent = data.description;
    document.getElementById('details-requirements').getElementsByTagName('span')[0].textContent = data.requirements;
    document.getElementById('details-img').src = data.imageUrl;


    if (data._ownerId !== localStorage.ownerID) {
        document.getElementById('edit-btn').style = 'display:none'
        document.getElementById('delete-btn').style = 'display:none'
        if (localStorage.email) {
            document.getElementById('apply-btn').style = 'display:block'
        } else {
            document.getElementById('apply-btn').style = 'display:none'

        }
    } else {
        document.getElementById('edit-btn').style = 'display:block'
        document.getElementById('delete-btn').style = 'display:block'
        document.getElementById('apply-btn').style = 'display:none'
    }
    document.getElementById('edit-btn').setAttribute('data-id', `${id}`)
    document.getElementById('delete-btn').setAttribute('data-id', `${id}`)



    document.getElementById('edit-btn').addEventListener('click', editOffer)
    document.getElementById('delete-btn').addEventListener('click', deleteOffer)




}