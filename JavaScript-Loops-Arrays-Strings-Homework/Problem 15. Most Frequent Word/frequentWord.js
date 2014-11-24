function findMostFreqWord(str) {
    var result = {};
    var arr = str.toLowerCase().split(/\W+/);

    // Split all words by frequency
    for (var index in arr) {
        if(result.hasOwnProperty(arr[index])) {
            result[arr[index]] += 1;
        } else {
            result[arr[index]] = 1;
        }
    }

    // Find the most frequent word
    var maxCount = 0;
    var maxProperty = 0;
    for (var prop in result) {
        if(result[prop] > maxCount) {
            maxCount = result[prop];
            maxProperty = prop;
        }
    }

    // If multiple words have the same frequency
    var returnArray = [];
    for (var prop in result) {
        if(result[prop] == maxCount) {
            returnArray.push(prop);
        }
    }
    returnArray = returnArray.sort();

    // Return array of strings
    var output = [];
    for(var index in returnArray) {
        output.push(returnArray[index] + ' -> ' + maxCount + ' times');
    }

    return output;
}

console.log(findMostFreqWord('in the middle of the night').join('\n'));
console.log();
console.log(findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.').join('\n'));
console.log();
console.log(findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.').join('\n'));