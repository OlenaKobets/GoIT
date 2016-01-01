// Before
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

multiplyNumeric(image);
console.log(image);

function multiplyNumeric(image) {
    for ( var field in image){
        image[field] = typeof (image[field] == 'number') ? image[field] = image[field]*2 : image[field];
    }
}

