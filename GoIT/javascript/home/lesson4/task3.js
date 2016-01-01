function trim(str){
    if (str.length > 20) {
        str = str.substr(0,20) + '...';
    }
    console.log(str);
}
trim('Some short string');
trim('Some very looooooooooooooooooooooooooooooooooong string');