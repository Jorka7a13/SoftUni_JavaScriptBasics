function findMostFreqNum(arr) {
    var result = {};

    // Split all numbers
    for (var index in arr) {
        if(result.hasOwnProperty(arr[index])) {
            result[arr[index]] += 1;
        } else {
            result[arr[index]] = 1;
        }
    }

    // Find the most frequent number
    var maxCount = 0;
    var maxProperty = 0;
    for (var prop in result) {
        if(result[prop] > maxCount) {
            maxCount = result[prop];
            maxProperty = prop;
        }
    }

    return maxProperty + ' (' + maxCount + ' times)';
}

console.log(findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
console.log(findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]));
console.log(findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));