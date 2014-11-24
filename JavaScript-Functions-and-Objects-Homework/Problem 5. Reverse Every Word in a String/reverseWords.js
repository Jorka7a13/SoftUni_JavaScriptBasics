function reverseWordsInString(str) {
    var words = str.split(" ");
    var result = '';

    for(var index in words) {
        result += words[index].split('').reverse().join('') + ' ';
    }

    return result;
}

console.log(reverseWordsInString('Hello, how are you.'));
console.log(reverseWordsInString('Life is pretty good, isn’t it?'));