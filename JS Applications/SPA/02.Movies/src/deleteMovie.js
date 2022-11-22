export async function deleteMovie(event) {
    console.log('delete')
    let id = event.target.getAttribute('data-id')
    console.log(id);

    let deletedContent = await fetch(`http://localhost:3030/jsonstore/data/movies/${id}`, {
        method: 'delete',
    })

    if (deletedContent.status === 200 || deletedContent.status === 201) {
        location.href = `index.html`
    }

}