import {
  deleteOffer
} from "../actions/delete.js";
import {
  edit
} from "../actions/edit.js";
import {
  getRequest
} from "../util/api.js";

export async function showDetails(event) {
  event.preventDefault()
  document.getElementsByTagName('main')[0].innerHTML = ''
  const section = document.createElement('section');
  section.setAttribute('id', 'details');

  const URL = `http://localhost:3030/data/shoes/`;
  const ID = event.target.getAttribute('data-id');

  let data = await getRequest(URL, ID)



  section.innerHTML = `          <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
          <img src="${data.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
          <p>Brand: <span id="details-brand">${data.brand}</span></p>
          <p>
            Model: <span id="details-model">${data.model}</span>
          </p>
          <p>Release date: <span id="details-release">${data.release}</span></p>
          <p>Designer: <span id="details-designer">${data.designer}</span></p>
          <p>Value: <span id="details-value">${data.value}</span></p>
        </div>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
          <a href="" id="edit-btn">Edit</a>
          <a href="" id="delete-btn">Delete</a>
        </div>
      </div>`



  document.getElementsByTagName('main')[0].appendChild(section)

  if (data._ownerId !== sessionStorage.ownerID) {
    document.getElementById('action-buttons').style.display = 'none'
  }

  const editButton = document.getElementById('edit-btn');
  const deleteButton = document.getElementById('delete-btn');

  editButton.setAttribute('data-id', `${data._id}`)
  deleteButton.setAttribute('data-id', `${data._id}`)

  editButton.addEventListener('click', edit);
  deleteButton.addEventListener('click', deleteOffer)

}