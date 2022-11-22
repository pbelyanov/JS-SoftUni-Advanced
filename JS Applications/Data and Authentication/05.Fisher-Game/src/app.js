const buttonLogout = document.getElementById('logout');
buttonLogout.addEventListener('click', async event => {

    let data = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': `${localStorage.getItem('authToken')}`
        }
    });

    localStorage.clear();
    location.reload()
})

if (localStorage.email) {
    document.getElementsByTagName('span')[0].textContent = localStorage.email;
    document.getElementById('login').style.display = "none";
    document.getElementById('register').style.display = "none";
    document.getElementsByClassName('add')[0].disabled = false;
    loadFunc(event)
}

if (!localStorage.email) {
    let button = document.getElementsByTagName('button');
    document.getElementById('logout').style.display = "none";

    for (let row of button) {
        row.disabled = true;
        document.getElementsByClassName('load')[0].disabled = false;
    }
    document.getElementById('login').style.display = "";
    document.getElementById('register').style.display = "";


}

//make a Load request 

let loadButton = document.getElementsByClassName('load')[0];

loadButton.addEventListener('click', loadFunc)


async function loadFunc(event) {
    let response = await fetch(`http://localhost:3030/data/catches`);
    let data = await response.json();
    let templateCatch = document.getElementsByClassName('catch')[0];
    let clone = templateCatch.cloneNode(true);
    let base = document.getElementById('catches');
    base.innerHTML = ''


    for (let row of data) {
        let clonedTemplate = clone.cloneNode(true);
        let idToCheck = row._ownerId
        clonedTemplate.getElementsByClassName('angler')[0].value = row.angler;
        clonedTemplate.getElementsByClassName('weight')[0].value = row.weight;
        clonedTemplate.getElementsByClassName('species')[0].value = row.species;
        clonedTemplate.getElementsByClassName('location')[0].value = row.location;
        clonedTemplate.getElementsByClassName('bait')[0].value = row.bait;
        clonedTemplate.getElementsByClassName('captureTime')[0].value = row.captureTime;

        clonedTemplate.getElementsByClassName('update')[0].setAttribute('data-id', `${row._id}`);
        clonedTemplate.getElementsByClassName('update')[0].addEventListener('click', updateContent)

        clonedTemplate.getElementsByClassName('delete')[0].setAttribute('data-id', `${row._id}`);
        clonedTemplate.getElementsByClassName('delete')[0].addEventListener('click', deleteContent)
        base.appendChild(clonedTemplate);

        if (idToCheck !== localStorage.ownerID) {
            clonedTemplate.getElementsByClassName('update')[0].disabled = true;
            clonedTemplate.getElementsByClassName('delete')[0].disabled = true;
        } else {
            clonedTemplate.getElementsByClassName('update')[0].disabled = false;
            clonedTemplate.getElementsByClassName('delete')[0].disabled = false;
        }

    }
}




//add feature

const formToLogin = document.getElementById('addForm');

formToLogin.addEventListener('submit', async event => {
    event.preventDefault();
    const dataForm = new FormData(event.target);

    const data = Object.fromEntries(dataForm.entries());
    console.log(data)

    let newData = await fetch(`http://localhost:3030/data/catches`, {
        method: 'post',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': `${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify(data)
    })
    loadFunc(event);
});

//delete feature


async function deleteContent(event) {
    const dataID = event.target.parentNode.getElementsByClassName('delete')[0].getAttribute('data-id');

    let deletedContent = await fetch(`http://localhost:3030/data/catches/${dataID}`, {
        method: 'delete',
        headers: {
            'X-Authorization': `${localStorage.getItem('authToken')}`
        },
    });
    let result = await deletedContent.json();
    loadFunc(event);
    console.log(result)
};

// update feature

async function updateContent(event) {

    const newInfo = {};
    newInfo.angler = event.target.parentNode.getElementsByClassName('angler')[0].value;
    newInfo.weight = event.target.parentNode.getElementsByClassName('weight')[0].value;
    newInfo.species = event.target.parentNode.getElementsByClassName('species')[0].value;
    newInfo.location = event.target.parentNode.getElementsByClassName('location')[0].value;
    newInfo.bait = event.target.parentNode.getElementsByClassName('bait')[0].value;
    newInfo.captureTime = event.target.parentNode.getElementsByClassName('captureTime')[0].value;
    console.log(newInfo);

    const dataID = event.target.parentNode.getElementsByClassName('delete')[0].getAttribute('data-id');

    let newData = await fetch(`http://localhost:3030/data/catches/${dataID}`, {
        method: 'put',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': `${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify(newInfo)
    })
    loadFunc(event);

}