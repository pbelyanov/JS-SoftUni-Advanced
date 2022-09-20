function biggerHalf(input) {
    input.sort((a, b) => a - b);

    input.splice(0, Math.floor(input.length / 2));
    return input;
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);