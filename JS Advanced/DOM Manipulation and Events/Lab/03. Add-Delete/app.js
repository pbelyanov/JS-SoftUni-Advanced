function addItem() {
    let element = document.getElementById('newItemText').value;
    let list = document.getElementById('items');
    let listItems = document.createElement('li');
    listItems.textContent = element;
    document.getElementById('items').appendChild(listItems);

    let remove = document.createElement('a');
    let linkText = document.createTextNode('[Delete]')

    remove.appendChild(linkText);
    remove.href = '#'
    remove.addEventListener('click', deleteButton);


    listItems.appendChild(remove);
    list.appendChild(listItems);


    function deleteButton() {
        listItems.remove()
    }
}