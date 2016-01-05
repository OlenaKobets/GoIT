var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ];
var getUniqueSorted = function(arr) {
    var obj = {};
    var res = [];

    for (var i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
        for (var prop in obj) {
            res.push(prop);
        }
        res.sort(function(a, b){
            return obj[b] - obj[a];
        });
        return res;
};
console.log(getUniqueSorted(arr));
//result = ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar' ];