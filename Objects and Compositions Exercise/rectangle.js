function rectangle(width, height, color) {
    let dimentions = {
        width,
        height,
        color,
        calcArea: function () {
            let area = this.width * this.height;
            return area;
        }
    }

    let upperCase = dimentions.color.charAt(0).toUpperCase() + dimentions.color.slice(1);
    dimentions.color = upperCase;


    return dimentions
}
let rect = rectangle(4, 5, 'red');
console.log(rect)
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());