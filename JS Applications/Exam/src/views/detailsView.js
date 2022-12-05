import {
    html,
    render
} from "../../node_modules/lit-html/lit-html.js"
import {
    deletePost
} from "../actions/delete.js";
import {
    edit
} from "../actions/edit.js";
import {
    getRequest
} from "../util/api.js";

export async function detailsView(event) {
    event.preventDefault();
    const URL = `http://localhost:3030/data/albums/`
    const ID = event.target.getAttribute('data-id');
    const detailsPage = (singer, album, release, label, sales, img) => html `<section id="details">
    <div id="details-wrapper">
      <p id="details-title">Album Details</p>
      <div id="img-wrapper">
        <img src="${img}" alt="example1" />
      </div>
      <div id="info-wrapper">
        <p><strong>Band:</strong><span id="details-singer">${singer}</span></p>
        <p>
          <strong>Album name:</strong><span id="details-album">${album}</span>
        </p>
        <p><strong>Release date:</strong><span id="details-release">${release}</span></p>
        <p><strong>Label:</strong><span id="details-label">${label}</span></p>
        <p><strong>Sales:</strong><span id="details-sales">${sales}</span></p>
      </div>
      <div id="likes">Likes: <span id="likes-count">0</span></div>

      <!--Edit and Delete are only for creator-->
      <div id="action-buttons">
        <a href="" id="like-btn">Like</a>
        <a href="" id="edit-btn">Edit</a>
        <a href="" id="delete-btn">Delete</a>
      </div>
    </div>
  </section>`

    const data = await getRequest(URL, ID)
    const main = document.getElementsByTagName('main')[0];

    render(detailsPage(data.singer, data.album, data.release, data.label, data.sales, data.imageUrl), main);


    const editButton = document.getElementById('edit-btn');
    editButton.setAttribute('data-id', ID);
    editButton.addEventListener('click', edit);

    const deleteButton = document.getElementById('delete-btn');
    deleteButton.setAttribute('data-id', ID)
    deleteButton.addEventListener('click', deletePost)

    const likeButton = document.getElementById('like-btn')


    if (data._ownerId !== sessionStorage.ownerID) {
        editButton.style.display = 'none';
        deleteButton.style.display = 'none';
    } else {
        likeButton.style.display = 'none';
    }

    if (sessionStorage.email === undefined) {
        editButton.style.display = 'none';
        deleteButton.style.display = 'none';
        likeButton.style.display = 'none';
    }

}