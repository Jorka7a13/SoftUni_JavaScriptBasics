function lastDigitAsText(num) {
    var digit = Math.abs(num % 10);

    switch(digit) {
        case 0:
            return 'Zero';
            break;
        case 1:
            return 'One';
            break;
        case 2:
            return 'Two';
            break;
        case 3:
            return 'Three';
            break;
        case 4:
            return 'Four';
            break;
        case 5:
            return 'Five';
            break;
        case 6:
            return 'Six';
            break;
        case 7:
            return 'Seven';
            break;
        case 8:
            return 'Eight';
            break;
        case 9:
            return 'Nine';
            break;
    }
}

console.log('6 - ' + lastDigitAsText(6));
console.log('-55 - ' + lastDigitAsText(-55));
console.log('133 - ' + lastDigitAsText(133));
console.log('14567 - ' + lastDigitAsText(14567));