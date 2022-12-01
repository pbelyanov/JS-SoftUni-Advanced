import {
    getRequest
} from "../util/api.js"
import {
    showDetails
} from "./detailsView.js";

function templateCard(img, brand, model, value, id) {
    let li = document.createElement('li');
    li.setAttribute('class', 'card');
    li.innerHTML = `              <img src="${img}" alt="travis" />
    <p>
      <strong>Brand: </strong><span class="brand">${brand}</span>
    </p>
    <p>
      <strong>Model: </strong
      ><span class="model">${model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${value}</span>$</p>
    <a class="details-btn" href="">Details</a>`
    document.getElementsByClassName('card-wrapper')[0].appendChild(li)
    li.getElementsByTagName('a')[0].setAttribute('data-id', `${id}`)
    li.getElementsByTagName('a')[0].addEventListener('click', showDetails)

}

export async function dashboardView() {
    document.getElementsByTagName('main')[0].innerHTML = ''
    const section = document.createElement('section');
    section.setAttribute('id', 'dashboard');

    section.innerHTML = `          <h2>Collectibles</h2>
    <ul class="card-wrapper">`
    document.getElementsByTagName('main')[0].appendChild(section)

    const URL = `http://localhost:3030/data/shoes?sortBy=_createdOn%20desc`;
    let data = await getRequest(URL)



    if (data[0] === undefined) {
        let h2 = document.createElement('h2');
        h2.textContent = `There are no items added yet.`
        section.appendChild(h2);
    } else {
        for (let row of data) {
            templateCard(row.imageUrl, row.brand, row.model, row.value, row._id)
        }
    }




}