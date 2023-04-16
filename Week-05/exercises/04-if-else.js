console.log('-------------------------------------');
console.log('        EXERCISE 4 : IF-ELSE         ');
console.log('-------------------------------------');

console.log('> EXERCISE 4A <');

var randomNumber = Math.random();

if (randomNumber >= 0.5) {
    alert('Greater than or equal to 0,5');
}else {
    alert('Lower than 0,5');
}

console.log('> EXERCISE 4B <');

var Age = 27;

if (Age < 2) {
    alert('Bebe');
}
if (Age >= 2 && Age <= 12) {
    alert('Niño');
}
if (Age >= 13 && Age <= 19) {
    alert('Adolescente');
}
if (Age >= 20 && Age <= 30) {
    alert('Adulto');
}
if (Age >= 31 && Age <= 60) {
    alert('Adulto mayor');
}
if (Age > 75) {
    alert('Anciano');
}