function solve() {
    const infoDiv = document.querySelector('.info');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');

    let baseURL = 'http://localhost:3030/jsonstore/bus/schedule'

    let stopID = 'depot'
    let stopName = ''

    async function depart() {
        let info = await fetch(`${baseURL}/${stopID}`);
        let result = await info.json();

        stopName = result.name;

        infoDiv.textContent = `Next stop ${stopName}`;
        stopID = result.next;

        departButton.disabled = true;
        arriveButton.disabled = false;

    }


    function arrive() {
        infoDiv.textContent = `Arriving at ${stopName}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();