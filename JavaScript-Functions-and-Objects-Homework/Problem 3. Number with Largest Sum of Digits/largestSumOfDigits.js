function findLargestBySumOfDigits(arr) {
    if(arguments.length == 0) {
        return undefined;
    }

    var input = arguments[0];

    var biggestSum = 0;
    var biggestNum = 0;

    for (var i = 0; i < input.length; i++) {
        if(typeof input[i] != 'number' ||input[i] % 1 != 0) {
            return undefined;
        }

        if(sumNumbers(input[i]) > biggestSum) {
            biggestSum = sumNumbers(input[i]);
            biggestNum = input[i];
        }
    }

    return biggestNum;

    function sumNumbers(num) {
        num = Math.abs(num);
        var digitsNum = num.toString().length;
        var sum = 0;

        for (var i = 0; i < digitsNum; i++) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    }
}

console.log('[5, 10, 15, 111] - ' + findLargestBySumOfDigits([5, 10, 15, 111]));
console.log('[33, 44, -99, 0, 20] - ' + findLargestBySumOfDigits([33, 44, -99, 0, 20]));
console.log('["hello"] - ' + findLargestBySumOfDigits(['hello']));
console.log('[5, 3.3] - ' + findLargestBySumOfDigits([5, 3.3]));