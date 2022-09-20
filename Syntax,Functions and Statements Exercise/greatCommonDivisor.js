function greatCommonDivisor(x, y) {
    x = Math.abs(x);
    z = Math.abs(y);

    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }
    console.log(x);
}
greatCommonDivisor(2154, 458)