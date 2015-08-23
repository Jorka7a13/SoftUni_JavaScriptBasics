function solve(arguments) {
    var dataRows = arguments;
    var associativeArr = {};
    var sortingCriteria = dataRows[dataRows.length - 1];

    for (var i = 0; i < dataRows.length; i += 1) {
        var currentData = dataRows[i].split(/\.*\*\.*/);

        var ownerName = currentData[0];
        var luggageName = currentData[1];
        var isFood = currentData[2];
        var isDrink = currentData[3];
        var isFragile = currentData[4];
        var weight = currentData[5];
        var transferredWith = currentData[6];

        if (!(ownerName in associativeArr)) {
            associativeArr[ownerName] = {};
        }
        associativeArr[ownerName][luggageName] = {};
        if (isFood == 'true') associativeArr[ownerName][luggageName]['type'] = 'food';
        else if (isDrink == 'true') associativeArr[ownerName][luggageName]['type'] = 'drink';
        else associativeArr[ownerName][luggageName]['type'] = 'other';

        associativeArr[ownerName][luggageName]['kg'] = weight;
        associativeArr[ownerName][luggageName]['fragile'] = isFragile;
        associativeArr[ownerName][luggageName]['transferredWith'] = transferredWith;
    }

    // Sorting

    var formattedResults = {};

    if (sortingCriteria == 'luggage name') {
        sortByName();
    } else if (sortingCriteria == 'weight') {
        sortByWeight();
    } else {
        sortByStrict();
    }

    function sortByName() {
    }

    function sortByWeight() {

    }

    function sortByStrict() {

    }
}


// DO NOT COPY BELOW FOR JUDGE

var input = [
    'Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
    'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
    'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
    'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
    'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
    'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
    'strict'
];

solve(input);