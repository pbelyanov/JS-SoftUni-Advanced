function solve() {
  let button = document.querySelectorAll('button')[0];

  button.addEventListener('click', generate);

  function generate(event) {
    let input = document.querySelectorAll('textarea')[0].value;
    let inputObject = JSON.parse(input);
    for (let row of inputObject) {
      let imgValue = row.img;
      let nameValue = row.name;
      let priceValue = row.price;
      let decFactorValue = row.decFactor;


      let img = document.createElement('img')
      img.src = imgValue;
      let td = document.createElement('td');
      let tr = document.createElement('tr')
      let tbody = document.querySelectorAll('tbody')[0];
      tbody.appendChild(tr);

      tr.appendChild(td);
      td.appendChild(img);

      let name = document.createElement('p');
      name.textContent = nameValue;
      let tdName = document.createElement('td');
      tr.appendChild(tdName);
      tdName.appendChild(name);

      let price = document.createElement('p');
      price.textContent = priceValue;
      let tdPrice = document.createElement('td');
      tr.appendChild(tdPrice);
      tdPrice.appendChild(price);

      let decFactor = document.createElement('p');
      decFactor.textContent = decFactorValue;
      let tdDecFactor = document.createElement('td');
      tr.appendChild(tdDecFactor);
      tdDecFactor.appendChild(decFactor);

      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox'
      let tdCheckBox = document.createElement('td');
      tr.appendChild(tdCheckBox);
      tdCheckBox.appendChild(checkbox);
    }
  }

  let buttonBuy = document.querySelectorAll('button')[1];

  buttonBuy.addEventListener('click', buy);

  let namesOfItem = [];
  let totalPrice = 0;
  let totalDecFactor = 0;
  let counter = 0;

  function buy(event) {
    let table = document.querySelectorAll('tbody tr')
    for (let i = 0; i < table.length; i++) {
      let currentRow = document
        .querySelectorAll('tbody tr')[i]
        .querySelectorAll('td')[4]
        .querySelectorAll('input')[0].checked;


      if (currentRow) {
        let name = document
          .querySelectorAll('tbody tr')[i]
          .querySelectorAll('td')[1].textContent;
        namesOfItem.push(name);
        let price = document
          .querySelectorAll('tbody tr')[i]
          .querySelectorAll('td')[2].textContent;
        totalPrice += Number(price);
        let decFactor = document
          .querySelectorAll('tbody tr')[i]
          .querySelectorAll('td')[3].textContent;
        totalDecFactor += Number(decFactor);
        counter++
      }
    }
    let averageDecFactor = totalDecFactor / counter;

    let outputField = document.querySelectorAll('textarea')[1];
    outputField.textContent += `Bought furniture: ${namesOfItem.join(', ')}\n`;
    outputField.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputField.textContent += `Average decoration factor: ${averageDecFactor}`
  }

}