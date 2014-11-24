document.addEventListener('mousemove', getPosition, false);
var input = document.getElementById('input');

function getPosition(event) {
    input.innerHTML = 'X: ' + event.clientX + '; Y: ' + event.clientY + ' Time: ' + new Date();
}