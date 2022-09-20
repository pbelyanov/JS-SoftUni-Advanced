function carFactory(myCar) {
    let engine = {
        smallEngine: {
            power: 90,
            volume: 1800
        },
        normalEngine: {
            power: 120,
            volume: 2400
        },
        monsterEngine: {
            power: 200,
            volume: 3500
        },

    }

    if (myCar.power <= 90) {
        myCar.power = engine.smallEngine;
    } else if (myCar.power > 90 && myCar.power <= 120) {
        myCar.power = engine.normalEngine;
    } else {
        myCar.power = engine.monsterEngine;
    }

    delete Object.assign(myCar, {
        engine: myCar.power
    })['power'];

    let carriage = {
        Hatchback: {
            type: 'hatchback',
            color: ''
        },
        Coupe: {
            type: 'coupe',
            color: ''
        }

    }

    myCar.carriage = {
        type: myCar.carriage,
        color: myCar.color
    }

    delete myCar.color;

    let wheels = [];

    if (myCar.wheelsize % 2 !== 0) {
        for (let i = 0; i < 4; i++) {
            wheels.push(myCar.wheelsize)
        }
    } else {
        myCar.wheelsize--;
        for (let i = 0; i < 4; i++) {
            wheels.push(myCar.wheelsize)
        }
    }

    myCar.wheels = wheels;

    delete myCar.wheelsize;

    return (myCar)
}

carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});