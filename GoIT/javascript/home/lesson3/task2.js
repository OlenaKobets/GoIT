var a = 2; b = 10;
function checkForSimple(n){
    for (var i = 2; i < n; i++){
        if(n % i === 0){
            return;
        }
    }
    console.log(n);
}
for (var i = a; i <= b; i++) {
    checkForSimple(i);
}