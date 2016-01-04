function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
    var cache = [];
        return function (x) {
            if(cache.hasOwnProperty(x)) {
                return cache[x]
            }
            else {
                var res = f(x);
                cache[x] = res;
                return res;
            }
        }
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
console.log( a == b ); // true (значение закешировано)

b = f(2);
console.log( a == b ); // false, другой аргумент => другое значение