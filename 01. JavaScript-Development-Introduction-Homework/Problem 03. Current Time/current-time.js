var currentDate = new Date();
var result = currentDate.getHours() + ":";

if(currentDate.getMinutes() < 10) {
    result += "0" + currentDate.getMinutes();
} else {
    result += currentDate.getMinutes();
}

console.log(result);