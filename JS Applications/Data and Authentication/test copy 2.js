function devicesName(x, arr, query_values) {
    let endResult = [];
    let countOccurenace = 0;
    for (let row of arr) {
        if (x === row) {
            countOccurenace++
        }
    }
    for (let currentQuery of query_values) {
        let currentCount = 0;
        if (currentQuery > countOccurenace) {
            endResult.push(-1);
        } else {
            let i = 1;
            for (let row of arr) {
                if (row === x) {
                    currentCount++
                }
                if (currentCount === currentQuery) {
                    endResult.push(i)
                    break;
                }
                i++
            }
        }
    }
    return (endResult)
}
console.log(devicesName(9, [9, 8, 9, 9], [7, 3, 7, 6]))