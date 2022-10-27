function processOddPositions(input) {
    let newArray = []
    for (let i = 1; i < input.length; i += 2) {
        newArray.push(input[i]);
    }

    let result = newArray.map(n => n * 2);
    result.reverse();
    console.log(result.join(' '))
}
processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);