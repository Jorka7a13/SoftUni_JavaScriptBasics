function checkDigit(num) {
    if(num < 1000) {
        console.log(num + ' has to be greater than 1000');
        return;
    }
    num = Math.floor(num / 100);
    return num % 10 == 3;
}

console.log('For 1235 - ' + checkDigit(1235));
console.log('For 25368 - ' + checkDigit(25368));
console.log('For 123456 - ' + checkDigit(123456));