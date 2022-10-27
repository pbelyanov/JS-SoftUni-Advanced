function generateReport() {
    let arrayHead = document.getElementsByTagName('input');
    let checkedHead = [];
    let finalResult = {};
    let indexOfHead = [];
    for (let i = 0; i < arrayHead.length; i++)
        if (arrayHead[i].checked === true) {

            let headToPush = document.querySelectorAll('thead tr th')[i].textContent;
            let finalHeadToPush = headToPush.trim();
            checkedHead.push(finalHeadToPush)
            indexOfHead.push(i);
        }


    function createArray(length) {
        var arr = new Array(length || 0),
            i = length;

        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            while (i--) arr[length - 1 - i] = createArray.apply(this, args);
        }

        return arr;
    }

    let rowsLength = document.querySelectorAll('tbody tr').length;

    let countColumnts = arrayHead.length;

    let rowArray = createArray(rowsLength, countColumnts);

    let row = document.querySelectorAll('tbody tr td')
    let k = 0;

    for (let i = 0; i < rowsLength; i++) {
        for (let j = 0; j < countColumnts; j++) {
            rowArray[i][j] = row[k].textContent;
            k++
        }
    }

    let finalArray = [];
    let jsonFinalResult = ''


    for (let j = 0; j <= rowsLength - 1; j++) {
        for (let i = 0; i < checkedHead.length; i++) {
            finalResult[checkedHead[i]] = rowArray[j][indexOfHead[i]];
            jsonFinalResult = JSON.stringify(finalResult);

        }
        finalArray.push(JSON.parse(jsonFinalResult));
    }

    console.log(finalArray[0].First);

    let result = JSON.stringify(finalArray, null, 2);


    document.getElementById('output').textContent = result;
}