'use strict'

function roadRadar(speed, area) {
    let speeding = false;
    let diff = 0;
    let status = '';
    let limit = 0;
    switch (area) {
        case 'motorway':
            if (speed > 130) {
                speeding = true;
                diff = speed - 130;
            };
            limit = 130;

            break;
        case 'interstate':
            if (speed > 90) {
                speeding = true;
                diff = speed - 90;

            };
            limit = 90;

            break;
        case 'city':
            if (speed > 50) {
                speeding = true;
                diff = speed - 50;

            };
            limit = 50;

            break;
        case 'residential':
            if (speed > 20) {
                speeding = true;
                diff = speed - 20;
            };
            limit = 20;

            break;
    }

    if (speeding) {
        if (diff <= 20) {
            status = 'speeding';
        } else if (diff > 20 && diff <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving'
        }

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`)
    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }



};
roadRadar(40, 'city');
roadRadar(21, 'residential');