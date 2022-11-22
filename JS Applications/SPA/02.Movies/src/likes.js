export async function likeMovie(event) {
    event.preventDefault();
    let id = event.target.getAttribute('data-id')

    let body = {
        movieId: id
    }
    console.log(body)

    let response = await fetch(`http://localhost:3030/jsonstore/data/movies/${id}`);
    const data = await response.json();

    let liked = localStorage.getItem('liked');

    if (localStorage.ownerID !== data._ownerId && liked !== 'yes') {
        let newData = await fetch(`http://localhost:3030/data/likes`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(
            document.getElementsByClassName("col-md-4 text-center")[0].getElementsByTagName('a')[2].style = 'display:none',
            document.getElementsByClassName("col-md-4 text-center")[0].getElementsByTagName('span')[0].style = 'display:block',
            localStorage.setItem('liked', 'yes')
        )
    } else {
        document.getElementsByClassName("col-md-4 text-center")[0].getElementsByTagName('a')[2].style = 'display:none';
        document.getElementsByClassName("col-md-4 text-center")[0].getElementsByTagName('span')[0].style = 'display:block';
    }
}