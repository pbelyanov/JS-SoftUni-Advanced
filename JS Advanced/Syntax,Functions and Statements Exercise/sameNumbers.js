function sameNumbers(num) {
    let stringNumber = num.toString();
    let firstToCheck = stringNumber[0];
    let result = true;
    let sum = 0;

    for (let i = 0; i < stringNumber.length; i++) {
        if (firstToCheck !== stringNumber[i]) {
            result = false;
        }
        sum += Number(stringNumber[i])
    }
    console.log(result);
    console.log(sum);

}
sameNumbers(00222222)