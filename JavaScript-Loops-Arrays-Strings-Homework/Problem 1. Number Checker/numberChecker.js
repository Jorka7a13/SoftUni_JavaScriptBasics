function printNumbers(num) {
    var result = [];
    for (var i = 1; i <= num; i++) {
        if(i % 4 != 0 && i % 5 != 0) {
            result.push(i);
        }
    }
    return result;
}

var result = [printNumbers(20), printNumbers(-5), printNumbers(13)];
for(var input in result) {
    if(result[input].length > 0) {
        console.log(result[input].join(", "));
    } else {
        console.log('no');
    }
}