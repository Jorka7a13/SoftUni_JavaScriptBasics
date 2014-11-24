function divisionBy3(num) {
    var sum = 0;
    var originalValue = num;
    if(num > 9) {
        while(num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        if(sum % 3 == 0) {
            console.log(originalValue + ' - the number is divided by 3 without remainder');
        } else {
            console.log(originalValue + ' - the number is not divided by 3 without remainder');
        }
    } else {
        console.log(num + ' should be greater than 9!');
    }
}

divisionBy3(12);
divisionBy3(188);
divisionBy3(591);