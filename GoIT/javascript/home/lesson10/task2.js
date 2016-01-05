var getMaxNumber = function(arr) {
  return arr.reduce(function(max, current) {
      return Math.max(max, current);
  });
};

console.log(getMaxNumber([1,30,40,2,7])); // 40
console.log(getMaxNumber([1,15,-20,2,-7])); // 15