var vasya = { name: 'Vasja', age: 23 };
var masha = { name: 'Masha', age: 18 };
var vovochka = { name: 'Vovochka', age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(function(a,b) {
    return a.age-b.age;
    });

for (var i = 0; i < people.length; i++) {
    console.log(people[i].name);
}
// теперь people: [vovochka, masha, vasya]
