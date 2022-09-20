function validityChecker(x1, y1, x2, y2) {
    function check1() {
        let result = (((0 - x1) ** 2 + (0 - y1) ** 2) ** 0.5);
        if (result === parseInt(result, 10)) {
            return true;
        } else {
            return false;
        }
    }

    function check2() {
        let result = ((((x2 - 0) ** 2) + ((y2 - 0) ** 2)) ** 0.5)
        if (result === parseInt(result, 10)) {
            return true;
        } else {
            return false;
        }

    }

    function check3() {
        let result = ((((x2 - x1) ** 2) + ((y2 - y1) ** 2)) ** 0.5)
        if (result === parseInt(result, 10)) {
            return true;
        } else {
            return false;
        }

    }
    if (check1() === true) {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`)
    }

    if (check2() === true) {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`)

    }

    if (check3() === true) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}
validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);


// x1 = 3, y1 = 0, x2 = 0, y2 = 4