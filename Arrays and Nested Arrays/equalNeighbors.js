function equalNeighbors(matrix) {
    let countNeigbors = 0;

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {
            if (i + 1 !== matrix.length) {
                if (matrix[i][j] === matrix[i + 1][j]) {
                    countNeigbors++;
                }
            }


            if (matrix[i][j] === matrix[i][j + 1]) {
                countNeigbors++;

            }

        }

    }
    console.log(countNeigbors);

}
equalNeighbors([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2'],
]);
equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);