function findMaxSequence(arr) {
    var result = {};

    // Split all sequences
    var currLength = 1;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i + 1] === arr[i]) {
            currLength++;
        } else {
            result[currLength] = arr[i];
            currLength = 1;
        }
    }

    // Find the biggest sequence
    var maxLength = 0;
    for (var prop in result) {
        if(parseInt(prop) > maxLength) {
            maxLength = parseInt(prop);
        }
    }

    // Return the biggest sequence
    var returnArray = [];
    for (var i = 0; i < maxLength; i++) {
        returnArray.push(result[maxLength]);
    }

    return returnArray;
}

console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));