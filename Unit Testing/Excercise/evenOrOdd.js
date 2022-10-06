function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

const {
    expect
} = require('chai')

describe('isOddOrEvenTester', () => {
    it('should receive valid input', () => {
        expect(isOddOrEven(1, 2, 3)).to.be.undefined
    })
    it('input should not be array', () => {
        expect(isOddOrEven([1, 2, 3])).to.be.undefined
    })
    it('should be odd', () => {
        expect(isOddOrEven('afcas')).to.be.equal('odd')
    })
    it('should be even', () => {
        expect(isOddOrEven('test')).to.be.equal('even')
    })
})