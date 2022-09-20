function diagonalAttack(matrix) {

    let numberMatrix = []
    for (let curr of matrix) {
        let stringArray = curr.split(' ')
        let numberArray = stringArray.map(Number);
        numberMatrix.push(numberArray);
    }


    let sumMain = 0;
    let sumSecondary = 0;
    let k = 0;
    let j = numberMatrix.length - 1;

    for (let i = 0; i < numberMatrix.length; i++) {
        sumMain += numberMatrix[i][k];
        sumSecondary += numberMatrix[i][j]
        k++
        j--
    }

    if (sumMain !== sumSecondary) {
        for (let row of numberMatrix) {
            console.log(row.join(' '))
        };
    } else {
        k = 0;
        let j = numberMatrix.length - 1;

        for (let i = 0; i < numberMatrix.length; i++) {
            for (let n = 0; n < numberMatrix[i].length; n++) {
                if (n !== k && n !== j) {
                    numberMatrix[i][n] = sumMain;
                }

            }
            k++
            j--
        }
        for (let row of numberMatrix) {
            console.log(row.join(' '))
        };
    }



}
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0'
])