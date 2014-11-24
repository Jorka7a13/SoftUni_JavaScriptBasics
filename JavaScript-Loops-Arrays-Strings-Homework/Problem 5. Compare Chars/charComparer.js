function compareChars(arr1, arr2) {
    if(arr1.length != arr2.length) {
        return false;
    }

    for (var i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            return false;
        }
    }

    return true;
}

var input1 = {arr1: ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], arr2: ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']};
var input2 = {arr1: ['3', '5', 'g', 'd'], arr2: ['5', '3', 'g', 'd']};
var input3 = {arr1: ['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], arr2: ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']};

console.log(input1.arr1.join(", ") + '\n' + input1.arr2.join(", "));
if(compareChars(input1.arr1, input1.arr2)) {
    console.log('Equal');
} else {
    console.log('Not Еqual');
}

console.log();

console.log(input2.arr1.join(", ") + '\n' + input2.arr2.join(", "));
if(compareChars(input2.arr1, input2.arr2)) {
    console.log('Equal');
} else {
    console.log('Not Еqual');
}

console.log();

console.log(input3.arr1.join(", ") + '\n' + input3.arr2.join(", "));
if(compareChars(input3.arr1, input3.arr2)) {
    console.log('Equal');
} else {
    console.log('Not Еqual');
}