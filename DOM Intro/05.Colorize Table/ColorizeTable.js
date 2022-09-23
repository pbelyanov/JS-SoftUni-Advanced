function colorize() {
    let tableRow = document.querySelectorAll('table tr');
    console.log(tableRow)

    for (let i = 0; i < tableRow.length; i++) {
        if (i % 2 !== 0) {
            document.querySelectorAll('table tr')[i].style = 'background-color: teal'
        }
    }
}