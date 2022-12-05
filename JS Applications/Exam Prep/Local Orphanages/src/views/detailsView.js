import {
  directive,
  html,
  render
} from "../../node_modules/lit-html/lit-html.js"
import {
  edit
} from "../actions/edit.js";
import {
  deleteRequest,
  getRequest
} from "../util/api.js";
import {
  dashboardView
} from "./dashboardView.js";

export async function detailsView(event) {
  event.preventDefault()


  let currentID = event.target.getAttribute('data-id');
  const URL = `http://localhost:3030/data/posts/`
  const main = document.getElementById('main-content');
  const data = await getRequest(URL, currentID)

  const detailsPage = (data) => html `<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
      <div id="details">
        <div class="image-wrapper">
          <img
            src="${data.imageUrl}"
            alt="Material Image"
            class="post-image"
          />
        </div>
        <div class="info">
          <h2 class="title post-title">${data.title}</h2>
          <p class="post-description">
            Description: ${data.description}
          </p>
          <p class="post-address">
            Address: ${data.address}
          </p>
          <p class="post-number">Phone number: ${data.phone}</p>
          <p class="donate-Item">Donate Materials: 0</p>

          <!--Edit and Delete are only for creator-->
          <div class="btns">
            <a href="#" class="edit-btn btn">Edit</a>
            <a href="#" class="delete-btn btn">Delete</a>

            <!--Bonus - Only for logged-in users ( not authors )-->
            <a href="#" class="donate-btn btn">Donate</a>
          </div>
        </div>
      </div>
    </div>
  </section>`

  render(detailsPage(data), main);

  const editButton = document.getElementsByClassName('edit-btn btn')[0];
  const deleteButton = document.getElementsByClassName('delete-btn btn')[0];
  const donateButton = document.getElementsByClassName('donate-btn btn')[0];
  editButton.setAttribute('data-id', `${currentID}`);
  deleteButton.setAttribute('data-id', `${currentID}`);
  donateButton.setAttribute('data-id', `${currentID}`);

  async function deleteItem() {
    let currentID = event.target.getAttribute('data-id');
    const URL = `http://localhost:3030/data/posts/`
    deleteRequest(URL, currentID);
    dashboardView();
  }

  editButton.addEventListener('click', edit)
  deleteButton.addEventListener('click', deleteItem)


  if (sessionStorage.ownerID !== data._ownerId) {
    editButton.style = 'display:none';
    deleteButton.style = 'display:none';
    donateButton.style = 'display:block';
  } else {
    editButton.style = 'display:block';
    deleteButton.style = 'display:block';
    donateButton.style = 'display:none';
  }

  if (!sessionStorage.email) {
    donateButton.style = 'display:none';

  }
}