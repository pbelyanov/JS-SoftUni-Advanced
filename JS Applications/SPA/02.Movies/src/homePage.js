import {
    addMovie
} from "./addMovie.js";

import {
    loadMovies
} from "./loadMovies.js";


export async function homePage(event) {
    if (!localStorage.email) {
        loadMovies();
        document.getElementById('add-movie-button').style = 'display:none';
        document.getElementById('add-movie').style = 'display:none';
        document.getElementById('form-login').style = 'display:none';
        document.getElementById('form-sign-up').style = 'display:none';
        document.getElementById('edit-movie').style = 'display:none';
        document.getElementById('movie-example').style = 'display:none';

    } else {
        loadMovies();
        document.getElementById('form-login').style = 'display:none';
        document.getElementById('form-sign-up').style = 'display:none';
        document.getElementById('add-movie').style = 'display:none';
        document.getElementById('edit-movie').style = 'display:none';
        document.getElementById('movie-example').style = 'display:none';
        document.getElementById('movie-example').style = 'display:none';

    }

    const addMovieButton = document.getElementById('add-movie-button').querySelector('a');
    addMovieButton.addEventListener('click', addMovie);

    const detailsButton = document.getElementsByClassName('btn btn-info');
    console.log(detailsButton);

}