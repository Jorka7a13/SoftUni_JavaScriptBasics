function solve(args) {
    for (var string in args) {
        calculateFuel(args[string]);
    }

    function calculateFuel(string) {
        var input = string.split(' ');
        var carModel = input[0];
        var fuelType = input[1];
        var route = input[2];
        var weight = input[3];

        var baseConsumption = 10;
        if (fuelType == 'gas') {
            baseConsumption *= 1.2;
        } else if (fuelType == 'diesel') {
            baseConsumption *= 0.8;
        }
        weight *= 0.01;
        baseConsumption += weight;

        var totalLength, snowyLength;

        if (route == 1) {
            totalLength = 110;
            snowyLength = 10;
        } else {
            totalLength = 95;
            snowyLength = 30;
        }

        var totalConsumption = (baseConsumption / 100) * totalLength;
        var snowConsumption = ((0.3 * baseConsumption) / 100) * snowyLength;
        var neededFuel = Math.round(totalConsumption + snowConsumption);

        console.log(carModel + ' ' + fuelType + ' ' + route + ' ' + neededFuel);
    }
}


// DO NOT COPY BELOW FOR JUDGE SYSTEM

var input = ['BMW petrol 1 320.5',
            'Golf petrol 2 150.75',
            'Lada gas 1 202',
            'Mercedes diesel 2 312.54'];

solve(input);