function sum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) return NaN;
    if (startIndex < 0) startIndex = 0;
    if (endIndex > array.length - 1) endIndex = array.length - 1;
    let result = 0

    for (let i = startIndex; i <= endIndex; i++) {
        if (isNaN(array[i])) return NaN;
        result += array[i];
    }
    return result;
}

const {
    expect
} = require('chai')

describe('sum', () => {

    it('should be an array', () => {
        let input = ([1, 2, 3], 0, 3)

        let result = sum([1, 2, 3], 0, 3);

        expect(result).to.be.equal(6);
    })
})