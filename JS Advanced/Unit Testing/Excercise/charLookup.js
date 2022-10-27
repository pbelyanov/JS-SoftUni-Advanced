function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


const {
    expect
} = require('chai');

describe('testLookupChar', () => {
    it('should not receive invalid input', () => {
        expect(lookupChar(1, 1)).to.be.undefined;
    })
    it('should not receive invalid input', () => {
        expect(lookupChar([1, 2], 1)).to.be.undefined;
    })
    it('should not receive invalid input', () => {
        expect(lookupChar('1', '2', 1)).to.be.undefined;
    })
    it('should not receive invalid input', () => {
        expect(lookupChar('testtest', '2')).to.be.undefined;
    })
    it('should not receive floating point number', () => {
        expect(lookupChar('testtest', 1.5)).to.be.undefined;
    })
    it('should not receive incorrect index', () => {
        expect(lookupChar('testtest', 8)).to.be.equal('Incorrect index');
    })
    it('should return correct result', () => {
        expect(lookupChar('testtest', 2)).to.be.equal('s')
    })
    it('should not receive incorrect index', () => {
        expect(lookupChar('testtest', -8)).to.be.equal('Incorrect index');
    })
})