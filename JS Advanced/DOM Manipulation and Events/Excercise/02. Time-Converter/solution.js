function attachEventsListeners() {
    let secondsBtn = document.getElementById('secondsBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let daysBtn = document.getElementById('daysBtn');

    let convertButton = [secondsBtn, minutesBtn, hoursBtn, daysBtn];

    for (let line of convertButton) {
        line.addEventListener('click', convertTime);
    }

    function convertTime(event) {
        let time = event.currentTarget.parentElement.querySelectorAll('input')[0].value;
        let button = event.currentTarget.parentElement.querySelectorAll('input')[1].getAttribute('id');
        let timeInSeconds = 0;
        switch (button) {
            case 'daysBtn':
                timeInSeconds = time * 86400;
                break;
            case 'hoursBtn':
                timeInSeconds = time * 3600;
                break;
            case 'minutesBtn':
                timeInSeconds = time * 60;
                break;
            case 'secondsBtn':
                timeInSeconds = Number(time);
                break;
        }
        document.getElementById('days').value = timeInSeconds / 86400;
        document.getElementById('hours').value = timeInSeconds / 3600;
        document.getElementById('minutes').value = timeInSeconds / 60;
        document.getElementById('seconds').value = timeInSeconds;


    }

}