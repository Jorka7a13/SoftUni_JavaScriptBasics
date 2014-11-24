function isPrime(num) {
    if (num > 1) {
        if (num < 10) {
            for (var i = 2; i < num; i++) {
                if (num % i == 0) {
                    return false;
                }
            }
            return true;
        }

        // If num is even it is not prime
        if (num % 2 == 0) {
            return false;
        } else {
            for (i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
                if (num % i == 0) {
                    return false;
                }
            }
            return true;
        }
    } else { // If num is less than 1
        return false;
    }
}

console.log('Is 7 prime? - ' + isPrime(7));
console.log('Is 254 prime? - ' + isPrime(254));
console.log('Is 587 prime? - ' + isPrime(587));