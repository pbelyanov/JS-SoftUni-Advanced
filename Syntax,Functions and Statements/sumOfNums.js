function sumOfNums(num1String, num2String) {
    let num1 = Number(num1String);
    let num2 = Number(num2String);
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    console.log(sum)
}
sumOfNums('-8', '20')