function sumTable() {
    let result = 0;
    let numLines = document.querySelectorAll('td')

    for (let i = 0; i < numLines.length - 2; i++) {
        if (i % 2 !== 0) {
            result += Number(document.querySelectorAll('td')[i].textContent)
        }
    }
    document.getElementById('sum').textContent = result
}