var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};

var extractNumbers = function(obj) {
    var arr = [];
    for (var prop in obj) {
        if (typeof obj[prop] == 'number')(arr.push(obj[prop]))
    }
    return arr;
};

var extractString = function(obj) {
    var arr = [];
    for (var prop in obj) {
        if (typeof obj[prop] == 'string')(arr.push(obj[prop]))
    }
    return arr;
};

var ages = extractNumbers(obj);
var names = extractString(obj);

console.log(ages);
console.log(names);