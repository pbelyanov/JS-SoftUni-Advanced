const buttonLoad = document.getElementById('loadBooks');
buttonLoad.addEventListener('click', loadBook);

let editButton = document.getElementsByTagName('tr')

async function loadBook(event) {
    let response = await fetch(`http://localhost:3030/jsonstore/collections/books`);
    let responseData = await response.json();

    console.log(responseData)

    const tableName = document.getElementsByTagName('tbody')[0];
    tableName.innerHTML = ''

    for (let row in responseData) {
        let tr = document.createElement('tr');
        let i = 1;
        for (let inside in responseData[row]) {
            let td = document.createElement('td');
            td.textContent = responseData[row][inside];
            tr.appendChild(td)
            i++;
            if (i === 3) {
                break;
            }
        }
        tableName.appendChild(tr);

        let td = document.createElement('td');
        tr.appendChild(td);

        let buttonEdit = document.createElement('button');
        let buttonDelete = document.createElement('button');

        td.appendChild(buttonEdit);
        td.appendChild(buttonDelete);

        buttonEdit.textContent = 'Edit';
        buttonDelete.textContent = 'Delete';

        buttonEdit.addEventListener('click', editBook);
        buttonDelete = addEventListener('click', deleteBook);

    }
}

async function editBook(e) {
    console.log('edit');
}

async function deleteBook(e) {
    console.log('delete');
}