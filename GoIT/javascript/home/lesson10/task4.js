var str = 'the quick brown fox';
var toUpperCase = function(str) {
    return str.split(' ').map(function(word) {
        return word[0].toUpperCase()+word.substr(1);
    }).join(' ');
};

console.log(toUpperCase(str));

