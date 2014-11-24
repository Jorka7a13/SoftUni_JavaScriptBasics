function sortArray(arr) {
    var resultArr = [];
    var currMin;
    while(arr.length > 0) {
        currMin = Math.min.apply(null, arr);
        resultArr.push(currMin);
        arr.splice(arr.indexOf(currMin), 1);
    }

    return resultArr
}

console.log(sortArray([5, 4, 3, 2, 1]).join(", "));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]).join(", "));