function findMaxSequence(arr) {
    var result = [];
    var isFound = false;

    // Split all sequences
    var currLength = 1;
    var sequence = [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i + 1] > arr[i]) {
            currLength++;
            sequence.push(arr[i]);
            isFound = true;
        } else {
            sequence.push(arr[i]);
            result.push(sequence);
            sequence = [];
            currLength = 1;
        }
    }

    // Find the biggest sequence
    var maxLength = 0;
    var maxIndex = 0;
    for (var sequence in result) {
        if(result[sequence].length > maxLength) {
            maxLength = result[sequence].length;
            maxIndex = sequence;
        }
    }

    if(isFound) {
        return result[maxIndex];
    } else {
        return 'no';
    }
}

console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));