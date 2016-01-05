var shuffle = function(arr) {
    return arr.sort(function() {
        return Math.random()-0.5;
    });
};

console.log(shuffle([1,2,3,4,5]))