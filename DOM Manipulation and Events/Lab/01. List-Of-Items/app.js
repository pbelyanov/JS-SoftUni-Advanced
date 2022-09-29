function addItem() {
    let element = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.textContent = element;
    document.getElementById('items').appendChild(li);
}