document.getElementById('input').addEventListener('input', checkInput, false);

function checkInput() {
    var reg = input.value.match(/\D+/);

    if(reg) {
        input.value = input.value.substring(0, input.value.length - reg[0].length);
        input.style.backgroundColor = 'red';
        setTimeout(function(){ input.style.backgroundColor = 'white'; }, 1000);
    }
}