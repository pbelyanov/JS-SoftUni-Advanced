function attachEventsListeners() {
    let button = document.getElementById('convert');
    button.addEventListener('click', convert);

    function convert(event) {
        let input = Number(document.getElementById('inputDistance').value);

        let type = document.getElementById('inputUnits').value
        let distanceInM = 0;
        switch (type) {
            case 'km':
                distanceInM = input * 1000;
                break;
            case 'm':
                distanceInM = input * 1;
                break;
            case 'cm':
                distanceInM = input * 0.01;
                break;
            case 'mm':
                distanceInM = input * 0.001;
                break;
            case 'mi':
                distanceInM = input * 1609.34;
                break;
            case 'yrd':
                distanceInM = input * 0.9144;
                break;
            case 'ft':
                distanceInM = input * 0.3048;
                break;
            case 'in':
                distanceInM = input * 0.0254;
                break;

        }

        let resultDistance = 0;
        let resultType = document.getElementById('outputUnits').value

        switch (resultType) {
            case 'km':
                resultDistance = distanceInM / 1000;
                break;
            case 'm':
                resultDistance = distanceInM / 1;
                break;
            case 'cm':
                resultDistance = distanceInM / 0.01;
                break;
            case 'mm':
                resultDistance = distanceInM / 0.001;
                break;
            case 'mi':
                resultDistance = distanceInM / 1609.34;
                break;
            case 'yrd':
                resultDistance = distanceInM / 0.9144;
                break;
            case 'ft':
                resultDistance = distanceInM / 0.3048;
                break;
            case 'in':
                resultDistance = distanceInM / 0.0254;
                break;
        }
        console.log(resultDistance)
        document.querySelectorAll('input[id="outputDistance"]')[0].value = resultDistance;
    }
}