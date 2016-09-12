function checkBrackets(str) {
    var count = 0;
    for (var letter in str) {
        if(str[letter] == '(') {
            count++;
        } else if(str[letter] == ')') {
            count--;
        }

        if(count < 0) {
            return 'incorrect';
        }
    }

    if(count == 0) {
        return 'correct';
    } else {
        return 'incorrect';
    }
}

console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));