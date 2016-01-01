// 1 1 2 3 5 8 13 21
function fib(n){
   /* if (n <= 1) {
        return n;
    } else {
        return (fib(n-1)+fib(n-2));
    }
}*/
    var result = 1, result1 = 1, a;
    if (n <= 2){
    return 1;
    }
    for (var i=3; i <= n; i++)
    { a = result;
        result += result1;
        result1 = a;
    }
    return result;
}

console.log(fib(3)); //2
console.log(fib(7)); //13
console.log(fib(77)); //5527939700884757