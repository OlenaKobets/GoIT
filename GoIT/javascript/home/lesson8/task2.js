function Calculator() {
    this.methods = {
        '+': function(a,b) {return parseInt(a)+parseInt(b)},
        '-': function(a,b) {return parseInt(a)-parseInt(b)}
    };

    this.calculate = function(str) {
        var expression = str.split(' ');
        var func = this.methods[expression[1]];
        try {
            return func(expression[0], expression[2]);
        }
        catch(e) {
            console.log('Invalid parameters of calculate() function');
        }
    };
    this.addMethod = function(symbol,func){
        this.methods[symbol] = func;
    }
}

var calc = new Calculator;

console.log( calc.calculate('3 + 7') ); // 10

var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {
    return a * b;
});
powerCalc.addMethod('/', function(a, b) {
    return a / b;
});
powerCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
console.log( result ); // 8