function biggestElement(matrix) {
    // let biggestNum = 0;

    // for (let num of matrix) {
    //     for (let num1 of num) {
    //         if (num1 > biggestNum) {
    //             biggestNum = num1
    //         }
    //     }
    // }
    // console.log(biggestNum)
    let newArray = []

    matrix.forEach(element => {
        newArray = newArray.concat(element)
    });

    newArray.sort((a, b) => a - b);

    console.log(newArray[newArray.length - 1])

}
biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]);
biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4, 123, -50, -150]
]);