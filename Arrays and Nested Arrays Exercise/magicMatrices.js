function magicMatrices(matrix) {
    let currentState = true;
    const initialValue = 0;
    let checkedSum = 0;
    let sumHorizontal = matrix[0].reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );
    for (let num of matrix) {
        checkedSum = num.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
        );

        if (sumHorizontal !== checkedSum) {
            currentState = false;
            break;
        }
    }

    for (let i = 0; i < matrix[0].length; i++) {
        let sumVertical = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumVertical += matrix[j][i];

            if (j == matrix.length - 1) {
                if (sumVertical !== sumHorizontal) {
                    currentState = false;
                    break;
                }
            }
        }

        if (currentState === false) {
            break;
        }
    }

    console.log(currentState);

}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);