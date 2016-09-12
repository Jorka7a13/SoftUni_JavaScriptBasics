function solve(args) {
    var posRow;
    var posCol;

    for (var i = 0; i < args.length; i += 1) { // Find the jumper
        if (args[i].indexOf('o') != -1) {
            posRow = i;
            posCol = args[i].indexOf('o');
        }
    }

    for (i = posRow; i < args.length - 1; i += 1) { // From the jumper's pos without the last (landing) line
        posRow += 1;
        posCol += getWinds(args[posRow]);
        if (posCol > 24) {
            posCol = 24;
        } else if (posCol < 0) {
            posCol = 0;
        }

        if (checkIfLanded(posRow, posCol)) { // If hits the ground because of gravity
            return;
        }
    }

    function getWinds(string) { // Maybe should have named it "Passing Wind(s)"?
        var result = 0;
        for (var i = 0; i < string.length; i += 1) {
            if (string[i] == '>') {
                result += 1;
            } else if (string[i] == '<') {
                result -= 1;
            }
        }

        return result;
    }

    function checkIfLanded(posX, posY) {
        if (args[posX].charAt(posY) != '-' && args[posX].charAt(posY) != '>' && args[posX].charAt(posY) != '<') {
            if (args[posX].charAt(posY) == '_') {
                console.log('Landed on the ground like a boss!');
            } else if (args[posX].charAt(posY) == '~') {
                console.log('Drowned in the water like a cat!');
            } else {
                console.log('Got smacked on the rock like a dog!');
            }

            console.log(posX + ' ' + posY);

            return true;
        }
    }
}


// DO NOT COPY BELOW FOR JUDGE SYSTEM

//var input = ['--o----------------------',
//             '>------------------------',
//             '>------------------------',
//             ' >-----------------/\\-----',
//             ' -----------------/--\\----',
//             ' >---------/\\----/----\\---',
//             ' ---------/--\\--/------\\--',
//             ' <-------/----\\/--------\\-',
//             ' \\------/----------------\\',
//             ' -\\____/------------------'];


//var input = ['-------------o-<<--------',
//             '-------->>>>>------------',
//             '---------------->-<---<--',
//             '------<<<<<-------/\\--<--',
//             '--------------<--/-<\\----',
//             '>>--------/\\----/<-<-\\---',
//             '---------/<-\\--/------\\--',
//             '<-------/----\\/--------\\-',
//             '\\------/--------------<-\\',
//             '-\\___~/------<-----------'];

var input = ['-------------o-----------',
             '-------------------------',
             '-------------------------',
             '------------------/\\-----',
             '-----------------/--\\----',
             '----------/\\----/----\\---',
             '---------/--\\--/------\\--',
             '--------/----\\/--------\\-',
             '\\------/----------------\\',
             '-\\____/------------------'];

solve(input);