function circleArea(input) {
    if (typeof input !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`)
    } else {
        console.log(((input * input) * Math.PI).toFixed(2))
    }

}
circleArea(5)