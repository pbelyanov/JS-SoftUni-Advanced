function devicesName(array) {
    let baseProducts = []
    array.sort()
    for (let row of array) {
        if (!baseProducts.includes(row)) {
            baseProducts.push(row)
        }
    }
    let highestCount = 0;
    mostSoldProduct = ''
    for (let row of baseProducts) {
        let currentCount = 0
        for (let i of array) {
            if (i === row) {
                currentCount++
            }
            if (highestCount <= currentCount) {
                highestCount = currentCount;
                mostSoldProduct = row
            }
        }
    }
    return (mostSoldProduct)
}
console.log(devicesName(['yellowShirt', 'redHat', 'blackShirt', 'bluePants', 'redHat', 'pinkHat', 'blackShirt', 'yellowShirt', 'greenPants', 'greenPants']))