function findCardFrequency(str) {
    var allCards = str.split(/[♥♣♦♠ ]+/);
    var result = {};

    for (var index in allCards) {
        if (result.hasOwnProperty(allCards[index])) { // If the card exists in the map, increment the value
            result[allCards[index]] += 1;
        } else {
            result[allCards[index]] = 1; // If the card doesn't exist in the map, add it
        }
    }

    delete result[""];
    for(var prop in result) {
        var percentage = ((result[prop] * 100) / (allCards.length - 1)).toFixed(2);
        console.log(prop + ' -> ' + percentage + '%');
    }
}

findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
console.log();
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
console.log();
findCardFrequency('10♣ 10♥');