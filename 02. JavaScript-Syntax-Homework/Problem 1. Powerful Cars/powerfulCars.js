function convertKWtoHP(kilowatts) {
    return (kilowatts / 0.745699872).toFixed(2);
}

console.log('75 kW are ' + convertKWtoHP(75));
console.log('150 kW are ' + convertKWtoHP(150));
console.log('1000 kW are ' + convertKWtoHP(1000));