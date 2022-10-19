const carService = {
    isItExpensive(issue) {
        if (issue === "Engine" || issue === "Transmission") {
            return `The issue with the car is more severe and it will cost more money`;
        } else {
            return `The overall price will be a bit cheaper`;
        }
    },
    discount(numberOfParts, totalPrice) {
        if (
            typeof numberOfParts !== "number" ||
            typeof totalPrice !== "number"
        ) {
            throw new Error("Invalid input");
        }

        let discountPercentage = 0;

        if (numberOfParts > 2 && numberOfParts <= 7) {
            discountPercentage = 15;
        } else if (numberOfParts > 7) {
            discountPercentage = 30;
        }

        let result = (discountPercentage / 100) * totalPrice;

        if (numberOfParts <= 2) {
            return "You cannot apply a discount";
        } else {
            return `Discount applied! You saved ${result}$`;
        }
    },
    partsToBuy(partsCatalog, neededParts) {
        let totalSum = 0;

        if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
            throw new Error("Invalid input");
        }
        neededParts.forEach((neededPart) => {
            partsCatalog.map((obj) => {
                if (obj.part === neededPart) {
                    totalSum += obj.price;
                }
            });
        });

        return totalSum;
    },
};

const {
    expect
} = require('chai');

describe("Car Service", function () {
    describe("isItExpensive", function () {
        it("should return proper result", function () {
            expect(carService.isItExpensive('Engine')).to.be.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.be.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Other Input')).to.be.equal(`The overall price will be a bit cheaper`);
        });
    });
    describe('discount', () => {
        it("should calculate proper discount", () => {
            expect(carService.discount(3, 100)).to.be.equal(`Discount applied! You saved 15$`)
            expect(carService.discount(10, 100)).to.be.equal(`Discount applied! You saved 30$`)
        })
        it("should not calculate under 2", () => {
            expect(carService.discount(2, 100)).to.be.equal("You cannot apply a discount")
            expect(carService.discount(-2, 100)).to.be.equal("You cannot apply a discount")
        })
        it("should receive valid input", () => {
            expect(carService.discount('2', 100)).to.throw(new Error("Invalid input"));
            expect(carService.discount(2, [100])).to.throw(new Error("Invalid input"));
        })
    })
    describe("partsToBuy", function () {
        it("should return proper result", function () {
            expect(carService.partsToBuy(([{
                part: "blowoff valve",
                price: 145
            }, {
                part: "coil springs",
                price: 230
            }]), (["blowoff valve", "injectors"]))).to.be.equal(145);
            expect(carService.partsToBuy(([{
                part: "blowoff valve",
                price: 145
            }, {
                part: "coil springs",
                price: 230
            }]), ([]))).to.be.equal(0);
        });
        it("should receive valid input", () => {
            expect(carService.partsToBuy(([{
                part: "blowoff valve",
                price: 145
            }, {
                part: "coil springs",
                price: 230
            }]), ('blowoff valve'))).to.throw(new Error('Invalid input'));
            expect(carService.partsToBuy(('parts : 2'), (['blowoff valve']))).to.throw(new Error('Invalid input'))
        });
    });
});