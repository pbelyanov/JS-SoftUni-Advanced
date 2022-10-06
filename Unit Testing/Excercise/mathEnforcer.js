let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

const {
    expect
} = require('chai')

describe('mathEnforcer', () => {
    describe('addFiveTest', () => {
        it('should not receive incorrect input', () => {
            expect(mathEnforcer.addFive('word')).to.be.equal(undefined);
            expect(mathEnforcer.addFive({})).to.be.equal(undefined);
            expect(mathEnforcer.addFive([1])).to.be.equal(undefined);
        })
        it('shold add 5 properly', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        })
        it('should work with negautve values', () => {
            expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
        })
        it('should work with floating point numbers', () => {
            expect(mathEnforcer.addFive(10.71)).to.be.closeTo(15.70, 15.72)
        })
    })

    describe('subtractTenTest', () => {
        it('should not receive incorrect input', () => {
            expect(mathEnforcer.subtractTen('word')).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen({})).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen([1])).to.be.equal(undefined);
        })
        it('shold subtract 10 properly', () => {
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
        })
        it('should work with negautve values', () => {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        })
        it('should work with floating point numbers', () => {
            expect(mathEnforcer.subtractTen(10.76)).to.be.closeTo(0.75, 0.77)
        })
    })

    describe('sumTest', () => {
        it('should not receive incorrect input', () => {
            expect(mathEnforcer.sum('word', 5)).to.be.equal(undefined);
            expect(mathEnforcer.sum(5, {})).to.be.equal(undefined);
            expect(mathEnforcer.sum(5, [5])).to.be.equal(undefined);
        })
        it('shold sum properly', () => {
            expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
        })
        it('should work with negautve values', () => {
            expect(mathEnforcer.sum(-10, -60)).to.be.equal(-70);
        })
        it('should work with floating point numbers', () => {
            expect(mathEnforcer.sum(1.58, 3.75)).to.be.closeTo(5.32, 5.34)
        })
    })
})