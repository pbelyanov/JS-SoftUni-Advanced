window.addEventListener("load", solve);

function solve() {
  let buttonPublish = document.getElementById('publish');
  buttonPublish.addEventListener('click', addElements);
  let profit = 0;
  let totalProfit = 0;


  function addElements(event) {
    event.preventDefault();
    let make = document.getElementById('make').value;
    let model = document.getElementById('model').value;
    let originalCost = document.getElementById('original-cost').value;
    let sellingPrice = document.getElementById('selling-price').value;
    let productionYear = document.getElementById('year').value;
    let fuelType = document.getElementById('fuel').value;

    let infoArray = [make, model, productionYear, fuelType, originalCost, sellingPrice];


    if (!make || !model || !originalCost || !sellingPrice || Number(originalCost) > Number(sellingPrice)) {
      return
    } else {
      let tr = document.createElement('tr');
      tr.setAttribute('class', 'row')
      let tbody = document.getElementById('table-body');
      tbody.appendChild(tr)
      for (let row of infoArray) {
        let td = document.createElement('td');
        td.textContent = row;
        tr.appendChild(td)
      }

      let tdButton = document.createElement('td')
      tr.appendChild(tdButton);

      let buttonEdit = document.createElement('button');
      buttonEdit.setAttribute('class', 'action-btn edit')
      buttonEdit.textContent = 'Edit'

      let buttonSell = document.createElement('button');
      buttonSell.setAttribute('class', 'action-btn sell')
      buttonSell.textContent = 'Sell'

      tdButton.appendChild(buttonEdit)
      tdButton.appendChild(buttonSell)

      document.getElementById('make').value = '';
      model = document.getElementById('model').value = '';
      originalCost = document.getElementById('original-cost').value = '';
      sellingPrice = document.getElementById('selling-price').value = '';
      document.getElementById('year').value = '';
      document.getElementById('fuel').value = '';
    }


    let buttonEdit = document.getElementsByClassName('action-btn edit');
    let buttonSell = document.getElementsByClassName('action-btn sell');

    for (let i = 0; i < buttonEdit.length; i++) {
      buttonEdit[i].addEventListener('click', edit);
      buttonSell[i].addEventListener('click', sell);
    }


    function edit(e) {

      let row = e.currentTarget.parentNode.parentNode.querySelectorAll('td');
      document.getElementById('make').value = row[0].textContent;
      document.getElementById('model').value = row[1].textContent;
      document.getElementById('original-cost').value = row[4].textContent;
      document.getElementById('selling-price').value = row[5].textContent;
      document.getElementById('year').value = row[2].textContent;
      document.getElementById('fuel').value = row[3].textContent;

      e.currentTarget.parentNode.parentNode.remove();
    }

    function sell(e) {
      if (profit !== 0) {
        profit = 0
        return;
      };
      let row = e.currentTarget.parentNode.parentNode.querySelectorAll('td');
      profit = Number(row[5].textContent) - Number(row[4].textContent)
      let makeAndModel = `${row[0].textContent} ${row[1].textContent}`
      let year = row[2].textContent;
      let arrayToFill = [makeAndModel, year, profit];
      let li = document.createElement('li');
      li.setAttribute('class', 'each-list')
      let target = document.getElementById('cars-list');
      target.appendChild(li)

      for (let target of arrayToFill) {
        let span = document.createElement('span');
        span.textContent = target;
        li.appendChild(span)
      }
      totalProfit += Number(profit);
      e.currentTarget.parentNode.parentNode.remove();
      document.getElementById('profit').textContent = totalProfit;
    }
  }


}