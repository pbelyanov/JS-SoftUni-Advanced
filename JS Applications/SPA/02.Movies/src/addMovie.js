import {
    homePage
} from "./homePage.js";

export async function addMovie(event) {
    event.preventDefault();
    document.getElementById('home-page').style = 'display:none';
    document.getElementById('add-movie-button').style = 'display:none';
    document.getElementById('add-movie').style = 'display:block';
    document.getElementById('form-login').style = 'display:none';
    document.getElementById('form-sign-up').style = 'display:none';
    document.getElementById('edit-movie').style = 'display:none';
    document.getElementById('movie').style = 'display:none';
    document.getElementById('movie-example').style = 'display:none';

    const addMovieForm = document.getElementById('add-movie-form');

    addMovieForm.addEventListener('submit', async event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());
        data._ownerId = localStorage.ownerID
        data.likes = 0

        for (let row in data) {
            if (data[row] === '') {
                throw new Error('All fields must be filled')
            }
        }

        let newData = await fetch(`http://localhost:3030/jsonstore/data/movies`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (newData.status === 200 || newData.status === 201) {
            location.href = `index.html`
        }

    })

}