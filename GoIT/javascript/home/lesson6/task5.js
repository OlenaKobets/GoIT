function isPal(str) {
    return str.toLocaleLowerCase() == str.split('').reverse().join('').toLocaleLowerCase();

}

console.log(isPal('Anna')); // true
console.log(isPal('� ���� ����� �� ���� �����')); //true
console.log(isPal('Vasya')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false