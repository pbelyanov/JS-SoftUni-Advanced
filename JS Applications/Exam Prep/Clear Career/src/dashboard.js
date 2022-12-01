import {
    showDetails
} from "./showDetails.js";



function templateOffer(img, title, salary, id) {
    const div = document.createElement('div');
    div.setAttribute('class', 'offer')
    div.innerHTML = `<img src="${img}" alt="example1" />
    <p>
      <strong>Title: </strong><span class="title">${title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${salary}</span></p>
    <a class="details-btn" href="">Details</a>`
    document.getElementById('dashboard').appendChild(div);
    div.getElementsByTagName('a')[0].setAttribute('data-id', `${id}`)
    div.getElementsByTagName('a')[0].addEventListener('click', showDetails)
}

export async function showDashboard(event) {


    let response = await fetch(`http://localhost:3030/data/offers?sortBy=_createdOn%20desc`);
    let data = await response.json();
    document.getElementsByTagName('main')[0].innerHTML = ''


    let section = document.createElement('section');
    section.setAttribute('id', 'dashboard');
    document.getElementsByTagName('main')[0].appendChild(section);

    // const dashboardSection = document.getElementById('dashboard');
    // dashboardSection.innerHTML = '';
    if (data[0] !== undefined) {
        let h2 = document.createElement('h2');
        h2.textContent = 'Job Offers';
        section.appendChild(h2);
    } else {
        let noOffers = document.createElement('h2');
        let h2First = document.createElement('h2')
        h2First.textContent = 'Job Offers';
        noOffers.textContent = 'No offers yet.';
        section.appendChild(h2First);
        section.appendChild(noOffers);


    }

    for (let row of data) {
        let img = row.imageUrl.substring(1);
        templateOffer(img, row.title, row.salary, row._id)
    }



}