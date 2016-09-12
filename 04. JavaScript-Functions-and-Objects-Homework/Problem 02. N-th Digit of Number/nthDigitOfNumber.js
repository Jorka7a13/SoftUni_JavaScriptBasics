function findNthDigit(arr) {
    arr[1] = Math.abs(Number(arr[1].toString().split(".").join("")));

    if(arr[1].toString().length < arr[0]) {
        return undefined;
    }

    for (var i = 1; i < arr[0]; i++) {
        arr[1] = Math.floor(arr[1] / 10);
    }

    return arr[1] % 10;
}

console.log('[1, 6] - ' + findNthDigit([1, 6]));
console.log('[2, -55] - ' + findNthDigit([2, -55]));
console.log('[6, 923456] - ' + findNthDigit([6, 923456]));
console.log('[3, 1451.78] - ' + findNthDigit([3, 1451.78]));
console.log('[6, 888.88] - ' + findNthDigit([6, 888.88]));