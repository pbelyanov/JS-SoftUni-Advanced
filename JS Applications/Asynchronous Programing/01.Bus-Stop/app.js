function getInfo() {
    document.getElementById('buses').innerHTML = ''
    let stopID = document.getElementById('stopId').value;
    var arrayResponse

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopID}`)
        .then((response, reject) => {
            return response.json()
        }).then((data) => {
            if (!data.name) {
                document.getElementById('stopName').textContent = 'Error'

            } else {
                document.getElementById('stopName').textContent = data.name

            }
            arrayResponse = data;
            let busesObj = data.buses
            for (let k in busesObj) {
                let li = document.createElement('li');
                document.getElementById('buses').appendChild(li);
                li.textContent = `Bus ${k} arrives in ${busesObj[k]} minutes`;
            }
        }).catch((error) => {
            document.getElementById('stopName').textContent = 'Error'

        })

}