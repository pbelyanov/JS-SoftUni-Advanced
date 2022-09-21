function lowestPricesInCities(input) {
    let result = [];

    for (let line of input) {
        let [town, product, price] = line.split(' | ');

        price = Number(price);

        let obj = result.find(x => x.product === product)

        if (obj) {
            if (price < obj.price) {
                obj.price = price;
                obj.town = town;
            }
        } else {
            obj = {
                town,
                product,
                price
            }
            result.push(obj)

        }
    }
    for (let i of result) {
        console.log(`${i.product} -> ${i.price} (${i.town})`)

    }
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])