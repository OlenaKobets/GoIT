function printNumbersInterval() {
    var i = 1;
    var timerNumber = setTimeout(function go() {
        console.log(i);
        if (i < 20) setTimeout(go, 100);
        i++;
    }, 100);
}

printNumbersInterval();

