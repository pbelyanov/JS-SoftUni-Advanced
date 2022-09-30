function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let textElement = document.createElement('option');
    textElement.textContent = text;
    textElement.value = value;
    let target = document.getElementById('menu');

    target.appendChild(textElement)
    document.getElementById('newItemText').value = "";
    document.getElementById('newItemValue').value = "";

}