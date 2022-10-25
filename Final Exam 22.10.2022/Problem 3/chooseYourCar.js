const chooseYourCar = {
    choosingType(type, color, year) {
        if (year < 1900 || year > 2022) {
            throw new Error(`Invalid Year!`);
        } else {
            if (type == "Sedan") {

                if (year >= 2010) {
                    return `This ${color} ${type} meets the requirements, that you have.`;
                } else {
                    return `This ${type} is too old for you, especially with that ${color} color.`;
                }
            }
            throw new Error(`This type of car is not what you are looking for.`);
        }
    },

    brandName(brands, brandIndex) {

        let result = [];

        if (!Array.isArray(brands) || !Number.isInteger(brandIndex) || brandIndex < 0 || brandIndex >= brands.length) {
            throw new Error("Invalid Information!");
        }
        for (let i = 0; i < brands.length; i++) {
            if (i !== brandIndex) {
                result.push(brands[i]);
            }
        }
        return result.join(", ");
    },

    carFuelConsumption(distanceInKilometers, consumptedFuelInLiters) {

        let litersPerHundredKm = ((consumptedFuelInLiters / distanceInKilometers) * 100).toFixed(2);

        if (typeof distanceInKilometers !== "number" || distanceInKilometers <= 0 ||
            typeof consumptedFuelInLiters !== "number" || consumptedFuelInLiters <= 0) {
            throw new Error("Invalid Information!");
        } else if (litersPerHundredKm <= 7) {
            return `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`;
        } else {
            return `The car burns too much fuel - ${litersPerHundredKm} liters!`;
        }
    }
}

const {
    expect
} = require('chai');

describe("Choose Your Car", function () {
    describe("choosingType", function () {
        it("Should Work Properly", function () {
            expect(chooseYourCar.choosingType('Sedan', 'Red', 2010)).to.be.equal(`This Red Sedan meets the requirements, that you have.`);
            expect(chooseYourCar.choosingType('Sedan', 'Red', 2015)).to.be.equal(`This Red Sedan meets the requirements, that you have.`);
        });
        it('Should return correct error when conditions are not met', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2005)).to.be.equal(`This Sedan is too old for you, especially with that red color.`);
        });
        it('Should return error on invalid year', () => {
            expect(chooseYourCar.choosingType('Sedan', 'Red', 1890)).to.throw(new Error(`Invalid Year!`));
        });
        it('Should return error on wrong type', () => {
            expect(chooseYourCar.choosingType('Cabrio', 'Red', 2010)).to.throw(new Error(`This type of car is not what you are looking for.`));

        })
    });
    describe("brandName", function () {
        it("Should return proper results", function () {
            expect(chooseYourCar.brandName(['BMW', 'Toyota', 'Skoda'], 2)).to.be.equal('BMW, Toyota');
        });
        it("Should return error when passed wrong type of input", () => {
            expect(chooseYourCar.brandName(['BMW', 'Toyota', 'Skoda'], '2')).to.throw(new Error(`Invalid Information!`));
        })
    });
    describe("CarFuelConsumption", function () {
        it("Should work properly", function () {
            expect(chooseYourCar.carFuelConsumption(50, 10)).to.be.equal(`The car burns too much fuel - 20.00 liters!`);
            expect(chooseYourCar.carFuelConsumption(50, 3)).to.be.equal(`The car is efficient enough, it burns 6.00 liters/100 km.`);
            expect(chooseYourCar.carFuelConsumption(50, 3.5)).to.be.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`);

        });
        it('Should receive proper input', () => {
            expect(chooseYourCar.carFuelConsumption('50', 10)).to.throw(new Error(`Invalid Information!`));
            expect(chooseYourCar.carFuelConsumption(50, '10')).to.throw(new Error(`Invalid Information!`));
            expect(chooseYourCar.carFuelConsumption(-50, 10)).to.throw(new Error(`Invalid Information!`));
            expect(chooseYourCar.carFuelConsumption(50, -10)).to.throw(new Error(`Invalid Information!`));

        })
    });
});