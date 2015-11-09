var a = 8, b = 8, str;
for (var i = 0; i < a; i++){
    str = '';
    for (var j = 0; j < a; j++) {
        str += (i % 2 === j % 2) ? '\#' : ' ';
    }
        console.log(str);
}