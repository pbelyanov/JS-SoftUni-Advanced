function janNotation(input) {
    let operands = [];
    let operators = [];
    let result = 0;
    for (let i of input) {
        if (i === '*' || i === '+' || i === '-' || i === '/') {
            operands.push(i);
        } else {
            operators.push(i);
        }
    }

    let objOperands = {
        add: ((a, b) => a + b),
        subtract: ((a, b) => a - b),
        multiply: ((a, b) => a * b),
        divide: ((a, b) => a / b)
    }

    operators.reverse();

    let currentNum = operators[0]

    for (let i = 0; i < operators.length; i++) {

        if (operands[i] === '+') {
            currentNum = objOperands.add(operators[i + 1], currentNum)
        } else if (operands[i] === '-') {
            currentNum = objOperands.subtract(operators[i + 1], currentNum)
        } else if (operands[i] === '*') {
            currentNum = objOperands.multiply(operators[i + 1], currentNum)
        } else if (operands[i] === '/') {
            currentNum = objOperands.divide(operators[i + 1], currentNum)
        }

    }

    if (operands.length > operators.length - 1) {
        console.log('Error: not enough operands!');
    } else if (operands.length < operators.length - 1) {
        console.log('Error: too many operands!')
    } else {
        console.log(currentNum)
    }

}
janNotation([
    -1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/'
])