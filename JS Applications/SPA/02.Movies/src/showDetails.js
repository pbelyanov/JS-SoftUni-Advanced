import {
    editMovie
} from './editMovie.js'

import {
    deleteMovie
} from './deleteMovie.js'

import {
    likeMovie
} from './likes.js'


function templateDetailsView(title, description, image, likes) {
    let divMain = document.createElement('div');
    divMain.className = 'container';
    divMain.innerHTML =
        `<div class="row bg-light text-dark">
        <h1>Movie title: ${title}</h1>

        <div class="col-md-8">
          <img
            class="img-thumbnail"
            src="${image}"
            alt="Movie"
          />
        </div>
        <div class="col-md-4 text-center">
          <h3 class="my-3">Movie Description</h3>
          <p>
            ${description}
          </p>
          <a class="btn btn-danger" href="#">Delete</a>
          <a class="btn btn-warning" href="#">Edit</a>
          <a class="btn btn-primary" href="#">Like</a>
          <span class="enrolled-span">Liked ${likes}</span>
        </div>
      </div>`
    document.getElementById('movie-example').innerHTML = '';
    document.getElementById('movie-example').appendChild(divMain);

}


export async function showDetails(event) {
    document.getElementById('movie-example').style = 'display:block';


    let id = event.target.getAttribute('data-id')

    let response = await fetch(`http://localhost:3030/jsonstore/data/movies/${id}`);
    const data = await response.json();


    document.getElementById('home-page').style = 'display:none'

    templateDetailsView(data.title, data.description, data.img, data.likes)

    let buttonDelete = document.getElementsByClassName("col-md-4 text-center")[0].getElementsByTagName('a')[0];
    buttonDelete.setAttribute('data-id', `${id}`)

    let buttonEdit = document.getElementsByClassName("col-md-4 text-center")[0].getElementsByTagName('a')[1];
    buttonEdit.id = id
    let buttonLike = document.getElementsByClassName("col-md-4 text-center")[0].getElementsByTagName('a')[2];
    buttonLike.setAttribute('data-id', `${id}`)

    if (localStorage.ownerID !== data._ownerId) {
        buttonDelete.style = 'display:none';
        buttonEdit.style = 'display:none';
        buttonLike.style = 'display:block';
        document.getElementsByClassName("col-md-4 text-center")[0].getElementsByTagName('span')[0].style = 'display:none'
    } else {
        buttonLike.style = 'display:none'

    }

    let liked = localStorage.getItem('liked');

    if (liked === 'yes') {
        document.getElementsByClassName("col-md-4 text-center")[0].getElementsByTagName('a')[2].style = 'display:none';
        document.getElementsByClassName("col-md-4 text-center")[0].getElementsByTagName('span')[0].style = 'display:block';
    }

    // let responseLikes = await fetch(`http://localhost:3030/jsonstore/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    // let dataLikes = await responseLikes.json()
    console.log(dataLikes)
    document.getElementsByClassName("col-md-4 text-center")[0].getElementsByTagName('span')[0].innerHTML = `Liked ${dataLikes}`

    buttonEdit.addEventListener('click', editMovie)
    buttonDelete.addEventListener('click', deleteMovie)
    buttonLike.addEventListener('click', likeMovie)




}