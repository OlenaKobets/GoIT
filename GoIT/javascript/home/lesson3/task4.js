var a = 1; b = 100;
for (var i = a; i <= b; i++){
    if (i % 3 === 0 && i % 5 === 0)
    {
        console.log('FizzBuzz')
    } else
        console.log(i);
}