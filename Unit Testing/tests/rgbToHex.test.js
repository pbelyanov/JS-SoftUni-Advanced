function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)) {
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)) {
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)) {
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

const {
    expect
} = require('chai');

describe('rgbTest', () => {
    it('should take 3 numbers lower than 255', () => {
        expect(rgbToHexColor(300, 250)).to.be.equal(undefined);
    });
    it('should not have negative input', () => {
        expect(rgbToHexColor(100, -250, 100)).to.be.equal(undefined);
    });
    it('should not have higher than 250 input', () => {
        expect(rgbToHexColor(100, 250, 400)).to.be.equal(undefined);
    })
    it('should return a string', () => {
        expect(rgbToHexColor(100, 250, 50)).to.be.string;
    })
    it('should return a correct formatted answer', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF')
    })
    it('should take a valid input', () => {
        expect(rgbToHexColor([100, 250, 50])).to.be.equal(undefined)
    })
    it('input should not be a string', () => {
        expect(rgbToHexColor("100, 250, 50")).to.be.equal(undefined)
    })
    it('input should not be a float', () => {
        expect(rgbToHexColor(100, 2.5, 100)).to.be.equal(undefined)
    })
    it('should not have empty imput', () => {
        expect(rgbToHexColor()).to.be.equal(undefined);
    })
    it('Should work with floating point integers', () => {
        expect(rgbToHexColor(0.0, 0.0, 0.0)).to.be.equal('#000000');
    });
})