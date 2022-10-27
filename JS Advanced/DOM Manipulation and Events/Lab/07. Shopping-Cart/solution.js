function solve() {
   let buttonAdd = Array.from(document.getElementsByClassName('add-product'));
   let fieldForResult = document.querySelectorAll('textarea')[0];
   let buttonCheckout = document.getElementsByClassName('checkout')[0];

   let totalPrice = 0;
   let list = []


   for (let pressedButton of buttonAdd) {
      pressedButton.addEventListener('click', addToCart)
   }
   buttonCheckout.addEventListener('click', checkout)


   function addToCart(event) {
      let nameOfProduct = event.currentTarget.parentNode.parentNode.getElementsByClassName('product-title')[0].textContent;
      let price = event.currentTarget.parentNode.parentNode.getElementsByClassName('product-line-price')[0].textContent;

      if (!list.includes(nameOfProduct)) {
         list.push(nameOfProduct);
      }
      totalPrice += Number(price);

      fieldForResult.textContent += `Added ${nameOfProduct} for ${price} to the cart.\n`

   }

   function checkout(event) {
      fieldForResult.textContent += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`
      for (let pressedButton of buttonAdd) {
         pressedButton.disabled = true;
      }
      event.target.disabled = true;
   }

}