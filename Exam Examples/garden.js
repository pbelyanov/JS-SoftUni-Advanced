class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = []
        this.storage = []
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) throw new Error('Not enough space in the garden.');
        let ripe = false;
        let quantity = 0;
        this.plants.push({
            plantName,
            spaceRequired,
            ripe,
            quantity
        });
        this.spaceAvailable -= Number(spaceRequired);
        return (`The ${plantName} has been successfully planted in the garden.`)
    }

    ripenPlant(plantName, quantity) {
        let exist = false;
        if (quantity <= 0) throw new Error(`The quantity cannot be zero or negative.`);
        for (let row of this.plants) {
            if (row.plantName.includes(plantName)) {
                exist = true;
                if (row.ripe === true) {
                    throw new Error(`The ${plantName} is already ripe.`)
                } else {
                    row.ripe = true;
                    row.quantity = quantity;
                    if (quantity === 1) {
                        return `${quantity} ${plantName} has successfully ripened.`
                    } else {
                        return `${quantity} ${plantName}s have successfully ripened.`
                    }
                }
            } else {
                exist = false;
            }
        }
        if (exist === false) throw new Error(`There is no ${plantName} in the garden.`)
    }
    harvestPlant(plantName) {
        let exist = false;
        let i = 0
        for (let row of this.plants) {
            if (row.plantName.includes(plantName)) {
                i++
                exist = true;
                if (row.ripe === true) {
                    this.spaceAvailable += Number(row.spaceRequired);
                    delete row.spaceRequired;
                    delete row.ripe;
                    this.storage.push(row);
                    this.plants.splice(i - 1, 1);
                    return `The ${plantName} has been successfully harvested.`
                } else {
                    throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
                }
            } else {
                i++
                exist = false;
            }
        }
        if (exist === false) throw new Error(`There is no ${plantName} in the garden.`)

    }
    generateReport() {
        let result = [];
        let plantsInGarden = [];
        let plantsInStorage = []
        result.push(`The garden has ${this.spaceAvailable} free space left.`);
        for (let row of this.plants) {
            plantsInGarden.push(row.plantName);
        }
        plantsInGarden.sort((a, b) => a - b);
        let stringPlants = plantsInGarden.join(', ')
        result.push(`Plants in the garden: ${stringPlants}`)
        if (this.storage === []) {
            result.push(`Plants in storage: The storage is empty.`)
        } else {
            for (let row of this.storage) {
                plantsInStorage.push(`${row.plantName} (${row.quantity})`)
            }
            let stringStorage = plantsInStorage.join(', ')
            result.push(`Plants in storage: ${stringStorage}`);
        }
        return result.join('\n')
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());