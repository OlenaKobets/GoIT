var str = 'Web Development Tutorial';
var theLongestWord = function(str) {
   var res = '';
    var arr = str.split(' ');
    for(var i = 0; i < arr.length; i++) {
        if (arr[i].length > res.length) {
            res = arr[i];
        }
    }
    return res;
};

console.log(theLongestWord(str));


