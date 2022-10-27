function fruit(fruitName, weight, money) {
    let price = weight / 1000 * money;

    console.log(`I need $${price.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruitName}.`)
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);