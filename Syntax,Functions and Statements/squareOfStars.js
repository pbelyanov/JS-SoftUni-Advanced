function squareOfStars(num) {
    let result = ''

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            result += '* '
            if (j === num - 1) {
                console.log(result);
                result = '';
            }
        }
    }

}
squareOfStars(5)