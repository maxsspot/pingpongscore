             var p1name = document.getElementById('p1name').value = localStorage.getItem ("play1");
             var p2name = document.getElementById('p2name').value = localStorage.getItem ("play2");
         var x = 0;
var y = 0;

function p1 () {
    document.getElementById('p1').innerHTML = ++x;
}

function p1lower () {
    if (x >= 1) {
        document.getElementById('p1').innerHTML = --x;   
    }
}

function p2 () {
    document.getElementById('p2').innerHTML = ++y;
}

function p2lower () {
    if (y >= 1) {
        document.getElementById('p2').innerHTML = --y;   
    }
}
            document.getElementById('p1').innerHTML = x;
document.getElementById('p2').innerHTML = y;

        function reset () {   
             var p1name = document.getElementById('p1name').value;
             var p2name = document.getElementById('p2name').value;
             if (x > y) {
                alert (p1name + " won!");
             } else if (x < y) {
                alert (p2name + " won!");
             } else if (x = y) {
                alert (p1name + " and " + p2name + " tied!");
             }
             localStorage.setItem ("play1",p1name);
             localStorage.setItem ("play2",p2name);
             location.reload();
        }
