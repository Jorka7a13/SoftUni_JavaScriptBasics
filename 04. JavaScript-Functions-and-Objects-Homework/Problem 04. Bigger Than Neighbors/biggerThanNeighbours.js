function biggerThanNeighbors(index,  arr) {
    if(index < 0 || index == arr.length) {
        return undefined;
    }

    if(arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
        return true;
    }

    return false;
}

function printResult(index,  arr) {
    if(biggerThanNeighbors(index,  arr) == undefined) {
        console.log(index + ', ' + arr + ' - invalid index');
    } else if(biggerThanNeighbors(index,  arr)) {
        console.log(index + ', ' + arr + ' - bigger');
    } else {
        if(index == 0) {
            console.log(index + ', ' + arr + ' - only one neighbor');
        } else {
            console.log(index + ', ' + arr + ' - not bigger');
        }
    }
}

printResult(2, [1, 2, 3, 3, 5]);
printResult(2, [1, 2, 5, 3, 4]);
printResult(5, [1, 2, 5, 3, 4]);
printResult(0, [1, 2, 5, 3, 4]);