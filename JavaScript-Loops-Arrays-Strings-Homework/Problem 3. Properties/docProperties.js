function displayProperties() {
    var arr = Object.getOwnPropertyNames(document);
    arr.sort();
    console.log(arr.join(('\n')));
}

displayProperties();