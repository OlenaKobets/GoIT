var num, sum = 0, array = [];
do {
num = prompt('Insert the number');
    array.push(Number(num));
}
while (num !== '' && num !== null)
for (var i = 0; i < array.length; i++){
    sum += array[i];
}
alert('The total is '+sum);