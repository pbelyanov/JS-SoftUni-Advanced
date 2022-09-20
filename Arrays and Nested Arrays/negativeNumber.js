function negativeNumber(input) {
    let newArray = []
    for (let num of input) {
        if (num < 0) {
            newArray.unshift(num);
        } else {
            newArray.push(num);
        }
    }


    for (let result of newArray) {
        console.log(result);
    }
}
negativeNumber([7, -2, 8, 9]);
negativeNumber([3, -2, 0, -1]);