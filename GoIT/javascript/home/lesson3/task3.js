var a = 1; b = 100;
for (var i = a; i <= b; i++){
    if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else
    {
        console.log(i);
    }
}