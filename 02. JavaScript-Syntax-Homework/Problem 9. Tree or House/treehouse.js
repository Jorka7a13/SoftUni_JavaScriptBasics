function treeHouseCompare(arr) {
    var houseArea, treeArea, circleRadius;
    houseArea = arr[0] * arr[0] + arr[0] * arr[0] / 3;

    circleRadius = (arr[1] / 3) * 2;
    treeArea = (arr[1] / 3) * arr[1] + Math.PI * circleRadius * circleRadius;

    if(houseArea > treeArea) {
        console.log('house/' + houseArea.toFixed(2));
    } else if(treeArea > houseArea){
        console.log('tree/' + treeArea.toFixed(2));
    } else {
        console.log('equal/' + treeArea.toFixed(2));
    }
}

var input1 = [3, 2];
treeHouseCompare(input1);
var input2 = [3 ,3];
treeHouseCompare(input2);
var input3 = [4, 5];
treeHouseCompare(input3);