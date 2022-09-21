function storeCatalogue(input) {
    let result = []

    for (let line of input) {
        let obj = {};
        let [name, price] = line.split(' : ')
        obj.name = name;
        obj.price = price;
        result.push(obj);
    }


    result.sort((a, b) => a.name.localeCompare(b.name));

    let currentCheckedLetter = '';

    for (let line of result) {
        if (currentCheckedLetter !== line.name.charAt(0)) {
            currentCheckedLetter = line.name.charAt(0)
            console.log(line.name.charAt(0));
            console.log(`  ${line.name}: ${line.price}`)
        } else {
            console.log(`  ${line.name}: ${line.price}`)
        }
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])