'use strict'

function timeToWalk(steps, footprint, speed) {
    let length = steps * footprint;
    let brakes = Math.floor(length / 500);
    let speedInSeconds = speed * (5 / 18);
    let totalSeconds = (length / speedInSeconds) + (brakes * 60);
    let totalSecondsFinal = totalSeconds
    let totalMinutes = 0;

    for (let i = 1; i <= totalSeconds; i++) {
        if (i % 60 === 0) {
            totalMinutes++;
            totalSecondsFinal -= 60;
        }
    }

    let totalMinutesFinal = totalMinutes;
    let totalHours = 0;

    for (let i = 1; i <= totalMinutes; i++) {
        if (i % 60 === 0) {
            totalHours++;
            totalMinutesFinal -= 60;
        }
    }

    totalSecondsFinal = Math.round(totalSecondsFinal);

    if (totalSecondsFinal === 0) {
        totalSecondsFinal = '00'
    }

    if (totalMinutesFinal === 0) {
        totalMinutesFinal = '00'
    }

    if (totalMinutesFinal < 10) {
        totalMinutesFinal = '0' + totalMinutesFinal;
    }

    if (totalHours < 10) {
        totalHours = '0' + totalHours
    }

    console.log(`${totalHours}:${totalMinutesFinal}:${totalSecondsFinal}`)

}
// timeToWalk(10, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);