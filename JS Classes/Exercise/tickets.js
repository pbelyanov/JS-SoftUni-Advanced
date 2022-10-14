function sortTickets(array, input) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status
        }
    }
    let resultArray = []
    for (let row of array) {
        let arrayRow = row.split('|');
        let i = new Ticket(arrayRow[0], arrayRow[1], arrayRow[2]);
        resultArray.push(i);
    }
    let sorted

    input != 'price' ? sorted = resultArray.sort((a, b) => a[input].localeCompare(b[input])) :
        sorted = resultArray.sort((a, b) => a[input] - b[input])

    return sorted
}
console.table(sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
))