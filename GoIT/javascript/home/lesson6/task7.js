var arr = ['���', '������', '������', '���', '������', '������', '������'];

var anClean = function(arr) {
obj = {}; rez = [];
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i].split('').sort().join('').toLowerCase()] = i;
    }
    for(prop in obj) {
        rez.push(arr[obj[prop]]);
}
return rez;
};

console.log( anClean(arr) ); // '���,������,������' ��� '���,������,������'