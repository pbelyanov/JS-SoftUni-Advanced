function exctactFromArray(list) {
    // let currentBigNum = 0;
    // let newList = [];
    // for (let num of list) {
    //     if (num > currentBigNum) {
    //         currentBigNum = num;
    //         newList.push(num)
    //     }
    // }
    // return (newList)

    let currentBigNum = 0;

    let result = list.filter(n => {
        if (n >= currentBigNum) {
            currentBigNum = n;
        }
        return n >= currentBigNum;
    })
    console.log(result)
}
exctactFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);
exctactFromArray([20,
    3,
    2,
    15,
    6,
    1
]);