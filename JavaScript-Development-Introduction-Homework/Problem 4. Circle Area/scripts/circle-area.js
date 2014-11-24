function calcCircleArea(r) {
    return Math.PI * r * r;
}

var result1 = document.getElementById("radius7");
result1.innerHTML = calcCircleArea(7);

var result2 = document.getElementById("radius1.5");
result2.innerHTML = calcCircleArea(1.5);

var result3 = document.getElementById("radius20");
result3.innerHTML = calcCircleArea(20);