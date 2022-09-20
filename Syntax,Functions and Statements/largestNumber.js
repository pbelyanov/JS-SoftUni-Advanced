function largestNumber(a, b, c) {
    let largestNumber1 = 0;

    if (a >= b && a >= c) {
        largestNumber1 = a
    } else if (b > a && b > c) {
        largestNumber1 = b
    } else {
        largestNumber1 = c
    }
    console.log(`The largest number is ${largestNumber1}.`)
}
largestNumber(5, -3, 16)