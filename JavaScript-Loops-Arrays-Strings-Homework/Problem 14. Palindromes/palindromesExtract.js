function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

function findPalindromes(str) {
    var result = [];
    var words = str.toLowerCase().match(/\w+/g);

    for (var index in words) {
        if(checkPalindrom(words[index])) {
            result.push(words[index]);
        }
    }

    return result;
}

console.log(findPalindromes('There is a man, his name was Bob.').join(", "));