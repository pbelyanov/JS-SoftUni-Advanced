function ticTacToe(matrix) {

    let matrixGame = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let counterTurns = 0;

    for (let i = 0; i < matrix.length; i++) {
        let turnArray = matrix[i].split(' ');


        if (matrixGame[turnArray[0]][turnArray[1]] === false) {
            if (counterTurns % 2 === 0) {
                matrixGame[turnArray[0]][turnArray[1]] = 'X'
                counterTurns++
            } else {
                matrixGame[turnArray[0]][turnArray[1]] = 'O'
                counterTurns++
            }
        } else {
            console.log('This place is already taken. Please choose another!')
        }

        if (matrixGame[0][0] == matrixGame[0][1] && matrixGame[0][0] == matrixGame[0][2] && matrixGame[0][0] !== false) {
            let winner = matrixGame[0][0];
            console.log(`Player ${winner} wins!`);
            for (let row of matrixGame) {
                console.log(row.join('\t'))
            };
            break;
        } else if (matrixGame[1][0] == matrixGame[1][1] && matrixGame[1][0] == matrixGame[1][2] && matrixGame[1][0] !== false) {
            let winner = matrixGame[1][0];
            console.log(`Player ${winner} wins!`);
            for (let row of matrixGame) {
                console.log(row.join('\t'))
            };
            break;

        } else if (matrixGame[2][0] == matrixGame[2][1] && matrixGame[2][0] == matrixGame[2][2] && matrixGame[2][0] !== false) {
            let winner = matrixGame[2][0];
            console.log(`Player ${winner} wins!`);
            for (let row of matrixGame) {
                console.log(row.join('\t'))
            };
            break;

        } else if (matrixGame[0][0] == matrixGame[1][0] && matrixGame[0][0] == matrixGame[2][0] && matrixGame[0][0] !== false) {
            let winner = matrixGame[0][0];
            console.log(`Player ${winner} wins!`);
            for (let row of matrixGame) {
                console.log(row.join('\t'))
            };
            break;

        } else if (matrixGame[0][1] == matrixGame[1][1] && matrixGame[0][1] == matrixGame[2][1] && matrixGame[0][1] !== false) {
            let winner = matrixGame[0][1];
            console.log(`Player ${winner} wins!`);
            for (let row of matrixGame) {
                console.log(row.join('\t'))
            };
            break;

        } else if (matrixGame[0][2] == matrixGame[1][2] && matrixGame[0][2] == matrixGame[2][2] && matrixGame[0][2] !== false) {
            let winner = matrixGame[0][2];
            console.log(`Player ${winner} wins!`);
            for (let row of matrixGame) {
                console.log(row.join('\t'))
            };
            break;

        } else if (matrixGame[0][0] == matrixGame[1][1] && matrixGame[0][0] == matrixGame[2][2] && matrixGame[0][0] !== false) {
            let winner = matrixGame[0][0];
            console.log(`Player ${winner} wins!`);
            for (let row of matrixGame) {
                console.log(row.join('\t'))
            };
            break;

        } else if (matrixGame[0][2] == matrixGame[1][1] && matrixGame[0][2] == matrixGame[2][0] && matrixGame[0][2] !== false) {
            let winner = matrixGame[0][2];
            console.log(`Player ${winner} wins!`);
            for (let row of matrixGame) {
                console.log(row.join('\t'))
            };
            break;

        }

        if (counterTurns >= 9) {
            console.log("The game ended! Nobody wins :(");
            for (let row of matrixGame) {
                console.log(row.join('\t'))
            }
            break;
        }
    }





}
ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"
])