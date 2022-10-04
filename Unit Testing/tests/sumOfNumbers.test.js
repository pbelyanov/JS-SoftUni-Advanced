function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}
const {
    expect
} = require('chai');

describe('sum', () => {
    it('is not correct', () => {
        expect(sum([1, 2, 3])).to.be.equal(6)
    })
    it('should work with floating numbers', () => {
        expect(sum([1, 1.2, 1.5])).to.be.equal(3.7);
    })
    it('should work with negative numbers', () => {
        expect(sum([-1, 1.2, 1.5])).to.be.equal(1.7)
    })
})