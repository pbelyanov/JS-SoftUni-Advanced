export async function editMovie(event) {
    document.getElementById('home-page').style = 'display:none';
    document.getElementById('add-movie-button').style = 'display:none';
    document.getElementById('add-movie').style = 'display:none';
    document.getElementById('form-login').style = 'display:none';
    document.getElementById('form-sign-up').style = 'display:none';
    document.getElementById('edit-movie').style = 'display:block';
    document.getElementById('movie').style = 'display:none';
    document.getElementById('movie-example').style = 'display:none';

    let id = event.target.getAttribute('id')
    let response = await fetch(`http://localhost:3030/jsonstore/data/movies/${id}`);
    const data = await response.json();

    document.getElementById('edit-movie').getElementsByTagName('input')[0].value = data.title
    document.getElementById('edit-movie').getElementsByTagName('textarea')[0].textContent = data.description
    document.getElementById('edit-movie').getElementsByTagName('input')[1].value = data.img

    const editMovieForm = document.getElementsByClassName('text-center border border-light p-5')[1];

    editMovieForm.addEventListener('submit', async event => {
        event.preventDefault();
        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());
        data._ownerId = localStorage.ownerID
        data._id = id;

        for (let row in data) {
            if (data[row] === '') {
                throw new Error('All fields must be filled')
            }
        }

        let newData = await fetch(`http://localhost:3030/jsonstore/data/movies/${id}`, {
            method: 'put',
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