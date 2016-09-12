function convertDigitToWord(num) {
    if(num < 0 || num > 10) {
        console.log('The input must be between 0 and 10!');
        return;
    }

    switch(num) {
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

console.log('8 - ' + convertDigitToWord(8));
console.log('3 - ' + convertDigitToWord(3));
console.log('5 - ' + convertDigitToWord(5));