function bitChecker(num) {
    return ((1 << 3) & num) >> 3 == 1;
}

console.log('For 333 - ' + bitChecker(333));
console.log('For 425 - ' + bitChecker(425));
console.log('For 2567564754 - ' + bitChecker(2567564754));