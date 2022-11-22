export async function makePost(event) {
    event.preventDefault();

    if (event.submitter.innerHTML !== 'Cancel') {
        const dataForm = new FormData(event.target);

        const data = Object.fromEntries(dataForm.entries());
        console.log(data)


        if (Object.values(data).includes('')) {
            throw new Error('All fields must be filled');
        }

        let newData = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

    } else {
        document.querySelector('form').reset();
    }


}