import {
  html,
  render
} from "../../node_modules/lit-html/lit-html.js"
import {
  getRequest
} from "../util/api.js";
import {
  detailsView
} from "./detailsView.js";


function cardCreation(singer, album, sales, img, id) {
  const li = document.createElement('li');
  li.setAttribute('class', 'card');
  li.innerHTML = `<img src="${img}" alt="travis" />
    <p>
      <strong>Singer/Band: </strong><span class="singer">${singer}</span>
    </p>
    <p>
      <strong>Album name: </strong><span class="album">${album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${sales}</span></p>
    <a class="details-btn" href="">Details</a>`

  const target = document.getElementsByClassName('card-wrapper')[0];
  li.getElementsByTagName('a')[0].setAttribute('data-id', id);
  li.getElementsByTagName('a')[0].addEventListener('click', detailsView)
  target.appendChild(li);
}

export async function dashboardView(event) {
  // event.preventDefault();
  const URL = `http://localhost:3030/data/albums?sortBy=_createdOn%20desc`
  const mainFrame = () => html `      <section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">
    </ul>
    <!-- Display an h2 if there are no posts -->
    <h2>There are no albums added yet.</h2>
  </section>`
  const main = document.getElementsByTagName('main')[0];
  render(mainFrame(), main);

  const data = await getRequest(URL);


  for (let row of data) {
    cardCreation(row.singer, row.album, row.sales, row.imageUrl, row._id);
    document.getElementsByTagName('h2')[1].style.display = 'none';
  }

}