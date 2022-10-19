const rentCar = {
    searchCar(shop, model) {
        let findModel = [];
        if (Array.isArray(shop) && typeof model == 'string') {
            for (let i = 0; i < shop.length; i++) {
                if (model == shop[i]) {
                    findModel.push(shop[i]);
                }
            }
            if (findModel.length !== 0) {
                return `There is ${findModel.length} car of model ${model} in the catalog!`;
            } else {
                throw new Error('There are no such models in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    calculatePriceOfCar(model, days) {
        let catalogue = {
            Volkswagen: 20,
            Audi: 36,
            Toyota: 40,
            BMW: 45,
            Mercedes: 50
        };

        if (typeof model == 'string' && Number.isInteger(days)) {
            if (catalogue.hasOwnProperty(model)) {
                let cost = catalogue[model] * days;
                return `You choose ${model} and it will cost $${cost}!`
            } else {
                throw new Error('No such model in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    checkBudget(costPerDay, days, budget) {
        if (!Number.isInteger(costPerDay) || !Number.isInteger(days) || !Number.isInteger(budget)) {
            throw new Error('Invalid input!');
        } else {
            let cost = costPerDay * days;
            if (cost <= budget) {
                return `You rent a car!`
            } else {
                return 'You need a bigger budget!'
            }
        }
    }
}

const {
    expect
} = require('chai');

describe("Rent Car", function () {
    describe("searchCar", function () {
        it("Should return proper result", function () {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi')).to.be.equal(`There is 1 car of model Audi in the catalog!`);
        });
        it('Should throw Error when needed', () => {
            expect(rentCar.searchCar(["Volkswagen", "Audi", "Audi"], 'Skoda')).to.throw(new Error(`There are no such models in the catalog!`));
        })
        it('Should accept proper input', () => {
            expect(rentCar.searchCar(["Volkswagen", "Audi", "Audi"], ['Skoda'])).to.throw(new Error(`Invalid input!`));
        })
    });
    describe("calculatePriceOfCar", function () {
        it("Should return proper results", function () {
            expect(rentCar.calculatePriceOfCar('Audi', 5)).to.be.equal(`You choose Audi and it will cost $180!`)
        });
        it('Should accept proper input', () => {
            expect(rentCar.calculatePriceOfCar('Audi', '5')).to.throw(new Error(`Invalid input!`));
            expect(rentCar.calculatePriceOfCar(['Audi'], 5)).to.throw(new Error(`Invalid input!`));
        })
        it('Should throw Error when needed', () => {
            expect(rentCar.calculatePriceOfCar('Skoda', 5)).to.throw((`No such model in the catalog!`));
        })
    });
    describe("checkBudget", function () {
        it("Should return proper results", function () {
            expect(rentCar.checkBudget(10, 5, 100)).to.be.eql(`You rent a car!`);
            expect(rentCar.checkBudget(10, 5, 40)).to.be.eql(`You need a bigger budget!`);
        });
        it('Should accept proper input', () => {
            expect(rentCar.checkBudget(10, 5, '40')).to.throw(new Error('Invalid input!'))
            expect(rentCar.checkBudget(10, [5], 40)).to.throw(new Error('Invalid input!'))
            expect(rentCar.checkBudget('10', 5, 40)).to.throw(new Error('Invalid input!'))
        })
    });
});