function lastKNumbersSequence(n, k) {
    let newArray = [];
    newArray.length = n;
    newArray[0] = 1;
    for (let i = 1; i < newArray.length; i++) {
        let sumToBeAdded = 0;

        if (k > i) {
            let j = i;

            for (let m = 0; m <= j - 1; m++) {
                sumToBeAdded += newArray[m]
            }
        } else {
            for (let m = i - 1; m >= i - k; m--) {
                sumToBeAdded += newArray[m]
            }
        }
        newArray[i] = sumToBeAdded;
    }

    return (newArray)

}
lastKNumbersSequence(6, 3)
lastKNumbersSequence(8, 2)