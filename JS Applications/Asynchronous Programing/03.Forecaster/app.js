function attachEvents() {
    let baseURL = 'http://localhost:3030/jsonstore/'
    let getWeatherButton = document.getElementById('submit')
    getWeatherButton.addEventListener('click', getWeather);

    let divForecasts = document.createElement('div');
    divForecasts.classList.add('forecasts')
    document.getElementById('current').appendChild(divForecasts)

    let divForecastUpcoming = document.createElement('div')
    document.getElementById('upcoming').appendChild(divForecastUpcoming);
    divForecastUpcoming.setAttribute('class', 'forecast-info');

    async function getWeather() {
        divForecastUpcoming.innerHTML = ''
        divForecasts.innerHTML = ''
        //get the code for the location
        let arrayLocations = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`);
        let resultArrayLoc = await arrayLocations.json();
        let inputLocation = document.getElementsByClassName('bl')[0].value;
        let code = '';
        for (let k of resultArrayLoc) {
            if (k.name === inputLocation) {
                code = k.code;
            }
        }

        // get the forecasts

        let todayForecast = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
        let resultTodayForecast = await todayForecast.json();

        let upcoming = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
        let resultUpcoming = await upcoming.json();

        console.log(resultTodayForecast, resultUpcoming)

        document.getElementById('forecast').style = "display:block"

        //Create the current forecast





        let conditionSymbolCurrent = document.createElement('span');
        conditionSymbolCurrent.setAttribute('class', 'condition symbol')
        switch (resultTodayForecast.forecast.condition) {
            case 'Sunny':
                conditionSymbolCurrent.innerHTML = `&#x2600`;
                break;
            case 'Partly sunny':
                conditionSymbolCurrent.innerHTML = `&#x26C5`;
                break;
            case 'Overcast':
                conditionSymbolCurrent.innerHTML = `&#x2601`;
                break;
            case 'Rain':
                conditionSymbolCurrent.innerHTML = `&#x2614`;
                break;
        }
        divForecasts.appendChild(conditionSymbolCurrent);
        let conditionSpan = document.createElement('span');
        conditionSpan.setAttribute('class', 'condition');
        divForecasts.appendChild(conditionSpan);

        let placeSpan = document.createElement('span');
        let tempSpan = document.createElement('span');
        let typeOfWeatherSpan = document.createElement('span');
        placeSpan.setAttribute('class', 'forecast-data');
        tempSpan.setAttribute('class', 'forecast-data');
        typeOfWeatherSpan.setAttribute('class', 'forecast-data');

        conditionSpan.appendChild(placeSpan);
        conditionSpan.appendChild(tempSpan);
        conditionSpan.appendChild(typeOfWeatherSpan);

        let symbolDegree = '°'


        placeSpan.textContent = resultTodayForecast.name;
        tempSpan.textContent = `${resultTodayForecast.forecast.low}${symbolDegree}/${resultTodayForecast.forecast.high}${symbolDegree}`;
        typeOfWeatherSpan.textContent = `${resultTodayForecast.forecast.condition}`

        //make the upcoming forecast





        for (let day of resultUpcoming.forecast) {
            let spanElement = document.createElement('span');
            spanElement.setAttribute('class', 'upcoming');
            divForecastUpcoming.appendChild(spanElement);

            let symbolSpan = document.createElement('span');
            symbolSpan.setAttribute('class', 'symbol');
            let conditionsFuture = day.condition;

            switch (conditionsFuture) {
                case 'Sunny':
                    symbolSpan.innerHTML = `&#x2600`;
                    break;
                case 'Partly sunny':
                    symbolSpan.innerHTML = `&#x26C5`;
                    break;
                case 'Overcast':
                    symbolSpan.innerHTML = `&#x2601`;
                    break;
                case 'Rain':
                    symbolSpan.innerHTML = `&#x2614`;
                    break;
            }

            let tempSpan = document.createElement('span');
            let typeOfWeatherSpan = document.createElement('span');

            tempSpan.setAttribute('class', 'forecast-data');
            typeOfWeatherSpan.setAttribute('class', 'forecast-data');

            tempSpan.textContent = `${day.low}${symbolDegree}/${day.high}${symbolDegree}`;
            typeOfWeatherSpan.textContent = `${day.condition}`


            spanElement.appendChild(symbolSpan)

            spanElement.appendChild(tempSpan);
            spanElement.appendChild(typeOfWeatherSpan);
        }


    }
}

attachEvents();