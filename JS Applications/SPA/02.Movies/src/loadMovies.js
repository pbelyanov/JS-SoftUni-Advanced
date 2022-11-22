import {
    showDetails
} from "./showDetails.js"

function templateForMovie(title, image, _id) {
    let div = document.createElement('div');
    div.className = 'card mb-4'
    let target = document.getElementById('movies-list');
    target.appendChild(div);

    div.innerHTML = `
    <img class="card-img-top" src="${image}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${title}</h4>
    </div>
    <div class="card-footer">
        <a id="${_id}">
            <button data-id="${_id}" type="button" class="btn btn-info">Details</button>
        </a>
    </div>`;

    document.getElementById(`${_id}`).addEventListener('click', showDetails);
    if (!localStorage.email) {
        document.getElementById(`${_id}`).style = 'display:none'
    }


}

export async function loadMovies(event) {
    let response = await fetch(`http://localhost:3030/jsonstore/data/movies`);
    let data = await response.json();

    for (let row in data) {
        templateForMovie(data[row].title, data[row].img, data[row]._id)
    }


}