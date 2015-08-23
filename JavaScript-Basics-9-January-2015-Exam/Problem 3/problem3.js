function solve(input) {

    var res = input[0].match(/<p>.*?<\/p>/g); // Take the text from all <p>s
    for (var text in res) {
        res[text] = res[text].substr(3, res[text].length - 7);
    }

    for (var i = 0; i < res.length; i += 1) { // Iterate all p's texts
        var currText = res[i];

        for (var j = 0; j < currText.length; j += 1) { // Iterate string
            if (!(currText[j] >= 'a' && currText[j] <= 'z' || currText[j] >= '0' && currText[j] <= '9')) { // Replace with spaces
                currText = replaceAt(currText, j, ' ');
            } else { // Decrypt text
                if (currText[j] >= 'a' && currText[j] <= 'm') {
                    currText = replaceAt(currText, j, nextChar(currText[j]));
                } else if (currText[j] >= 'n' && currText[j] <= 'z'){
                    currText = replaceAt(currText, j, prevChar(currText[j]));
                }
            }
        }

        currText = currText.replace(/ +/g, ' '); // MAYBE MAKE IT WHITESPACE \s ???
        res[i] = currText;
    }

    var result = res.join('');
    console.log(result);

    function replaceAt(string, index, character) {
        return string.substr(0, index) + character + string.substr(index + character.length);
    }

    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 13);
    }

    function prevChar(c) {
        return String.fromCharCode(c.charCodeAt(0) - 13);
    }

}


// DO NOT COPY BELOW FOR JUDGE

//var input = ["<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****</p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>"];
var input = ["<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj  qpunvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre fnvq guna qbar ohg vs lbh chg ba lbhe gverf</p></body>"];
solve(input);