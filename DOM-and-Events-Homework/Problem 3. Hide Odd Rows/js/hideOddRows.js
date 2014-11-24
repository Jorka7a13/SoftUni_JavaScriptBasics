document.getElementById('btnHideOddRows').addEventListener('click', hideOddRows, false);

function hideOddRows() {
    var rows = document.body.querySelectorAll('table tr:nth-child(odd)');

    for(var i in rows) {
        if(rows[i].tagName == 'TR') {
            rows[i].parentElement.removeChild(rows[i]);
        }
    }
}