function checkSpam(str){
    str = str.toLowerCase();
return (str.indexOf('spam') !== -1 || str.indexOf('sex') !== -1);
}

console.log(checkSpam('get new Sex videos')); // true
console.log(checkSpam('[SPAM] How to earn fast money?')); // true
console.log(checkSpam('New PSD template')); // false