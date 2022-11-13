const formElement = document.getElementById('form');

formElement.addEventListener('submit', submitStudent)

async function submitStudent(event) {
    event.preventDefault();
    const dataForm = new FormData(event.target);

    const data = Object.fromEntries(dataForm.entries());

    console.log(data);


    let newData = await fetch(`http://localhost:3030/jsonstore/collections/students`, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    let response = await fetch(`http://localhost:3030/jsonstore/collections/students`);
    let responseData = await response.json();

    console.log(responseData)

    const tableName = document.getElementById('results').getElementsByTagName('tbody')[0];

    for (let row in responseData) {
        let tr = document.createElement('tr');
        let i = 1;
        for (let inside in responseData[row]) {
            let td = document.createElement('td');
            td.textContent = responseData[row][inside];
            tr.appendChild(td)
            i++;
            if (i === 5) {
                break;
            }
        }
        tableName.appendChild(tr);
    }
}