function calcCylinderVol(arr) {
    return Math.PI * arr[0] * arr[0] * arr[1];
}

var input1 = [2, 4];
console.log('Radius: 2, Height: 4 - ' + calcCylinderVol(input1).toFixed(3));
var input2 = [5, 8];
console.log('Radius: 5, Height: 8 - ' + calcCylinderVol(input2).toFixed(3));
var input3 = [12, 3];
console.log('Radius: 12, Height: 3 - ' + calcCylinderVol(input3).toFixed(3));