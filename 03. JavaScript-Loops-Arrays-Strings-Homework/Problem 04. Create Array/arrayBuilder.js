function createArray() {
    var array = new Array(20);
    for (var i = 0; i <= 20; i++) {
        array[i] = i * 5;
    }
    return array;
}

console.log(createArray().join(' '));