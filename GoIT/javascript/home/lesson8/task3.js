function User(fullName) {
    this.fullName = fullName;
}

var vasya = new User('Aleksandr Pushkin');
Object.defineProperty(vasya,'firstName', {
    set: function(newValue) {
        this.fullName = newValue+ ' ' +this.fullName.split(' ')[1];
    },
    get: function() {
        return this.fullName.split(' ')[0];
    }
});

Object.defineProperty(vasya,'lastName', {
    set: function(newValue) {
        this.fullName = this.fullName.split(' ')[0]+ ' ' +newValue;
    },
    get: function() {
        return this.fullName.split(' ')[1]
    }
});


// чтение firstName/lastName
console.log( vasya.firstName ); // Александр
console.log( vasya.lastName ); // Пушкин

// запись в lastName
vasya.lastName = 'Tolstoy';

console.log( vasya.fullName ); // Александр Толстой