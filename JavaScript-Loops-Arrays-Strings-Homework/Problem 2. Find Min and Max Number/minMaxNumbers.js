function findMinAndMax(arr) {
    return [Math.min.apply(0, arr), Math.max.apply(0, arr)];
}
var input1 = [1, 2, 1, 15, 20, 5, 7, 31];
var result1 = findMinAndMax(input1);
var input2 = [2, 2, 2, 2, 2];
var result2 = findMinAndMax(input2);
var input3 = [500, 1, -23, 0, -300, 28, 35, 12];
var result3 = findMinAndMax(input3);

console.log('Input: ' + input1);
console.log('Min -> ' + result1[0]);
console.log('Max -> ' + result1[1]);
console.log();
console.log('Input: ' + input2);
console.log('Min -> ' + result2[0]);
console.log('Max -> ' + result2[1]);
console.log();
console.log('Input: ' + input3);
console.log('Min -> ' + result3[0]);
console.log('Max -> ' + result3[1]);