var strings = ['������', '������', '����', '����', '����', '����', '������', '������', '8-()' ];

unique = function(arr) {
    obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    var rez = [];
    for(prop in obj) {
        rez.push(prop);
    }
    return obj;
};
console.log( unique(strings) ); // ������, ����, 8-()