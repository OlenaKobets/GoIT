obj = {
    className: 'my menu menu'
};

var removeClass = function (obj, str) {
    var arr = obj.className.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == str) {
            arr.splice(i--,1);
        }
    }
    obj.className = arr.join(' ');
}

removeClass(obj, 'menu');

console.log( obj.className ); // 'my'




