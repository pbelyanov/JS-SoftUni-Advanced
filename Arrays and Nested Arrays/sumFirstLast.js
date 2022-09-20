function sumFirstLast(input) {
    let sum = 0;
    let lastNum = Number(input.pop());
    let firstNum = Number(input.shift());

    let result = lastNum + firstNum;
    console.log(result)
}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);