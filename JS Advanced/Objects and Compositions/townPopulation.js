function townPopulation(input) {
    let inputArray = []
    for (let loop of input) {
        inputArray.push(loop.split(' <-> '));
    }

    let registry = {};
    for (let check of inputArray) {
        if (check[0] in registry) {
            registry[(check[0])] += Number(check[1]);
        } else {
            registry[check[0]] = Number(check[1]);

        }
    }

    for (let key in registry) {
        11111
        console.log(`${key} : ${registry[key]}`)
    }

}
townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
])
townPopulation([
    'Honk Kong <-> 2100004',
    'Istanbul <-> 100000',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
])