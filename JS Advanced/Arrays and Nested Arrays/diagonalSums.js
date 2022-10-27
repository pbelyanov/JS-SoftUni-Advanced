function diagonalSums(matrix) {
    let sumMain = 0;
    let sumSecondary = 0;
    let k = 0;
    let j = matrix.length - 1;


    for (let i = 0; i < matrix.length; i++) {
        sumMain += matrix[i][k];
        sumSecondary += matrix[i][j]
        k++
        j--
    }

    console.log(sumMain, sumSecondary)
}
diagonalSums([
    [20, 40],
    [10, 60]
]);
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);