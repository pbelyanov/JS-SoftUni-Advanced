function devicesName(num) {
    let count = 1;
    for (let i = 1; i <= num; i++) {
        let currentSum = i;
        for (let j = i + 1; j <= num; j++) {
            if (currentSum > num) {
                break;
            }
            if (currentSum === num) {
                count++
                break;
            }
            if (currentSum < num) {
                currentSum += j
            }
        }
    }
    return count;
}

console.log(devicesName(17266956))