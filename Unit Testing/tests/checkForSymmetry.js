function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

const {
    expect
} = require('chai');

describe('checForSymmetry', () => {
    it('should take array', () => {
        expect(isSymmetric(1, 2, 3)).to.be.false;
    })
    it('should return true when symmetric', () => {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    })
    it('should return false when not symmetric', () => {
        expect(isSymmetric([1, 2, 3, 2, 2])).to.be.false;
    })
    it('should work with letters', () => {
        expect(isSymmetric(['a', 'b', 'c', 'b', 'a'])).to.be.true;
    })
    it('should not work with mixed array', () => {
        expect(isSymmetric([1, '2', 3, 'a', 2])).to.be.false;
    })
    it('works with symmetric odd-length array ', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true
    })
    it('returns false for string param ', () => {
        expect(isSymmetric(['abba'])).to.be.false
    })
    it('returns false for type mismatched elements ', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false
    })
})