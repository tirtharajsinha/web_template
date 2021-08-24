var counter = 2;
setInterval(function() {
    counter = counter_r();
    document.getElementById("radio" + counter).checked = true;
    counter++;
    counter_u(counter);
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

function counter_r() {
    return counter;
}

function counter_u(val) {
    counter = val;
}