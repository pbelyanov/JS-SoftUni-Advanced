function spiralMatrix(height, width) {
    let matrix = Array(height).fill(Array(width))
    for (let i = 0; i < width; i++) {
        matrix[i][i] = false;
    }

    let countLength = width - 1;
    let directionChanges = 1;
    let direction = 'r';

    function directionSwitch() {
        switch (direction) {
            case 'r':
                direction = 'd';
                return direction;
                break;
            case 'd':
                direction = 'l';
                return direction;

                break;
            case 'l':
                direction = 'u';
                return direction;

                break;
            case 'u':
                direction = 'r';
                return direction;

                break;
        }
    }
    let n = 0;

    for (let i = 0; i <= countLength; i++) {

        if (i !== countLength) {

        }
    }



}
spiralMatrix(5, 5);