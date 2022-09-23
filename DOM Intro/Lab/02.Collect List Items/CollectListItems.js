function extractText() {
    let items = document.querySelectorAll('ul li');

    for (let line of items) {
        document.getElementById('result').value += line.textContent + '\n';
    }

}