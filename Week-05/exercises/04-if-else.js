console.log('-------------------------------------');
console.log('        EXERCISE 4 : IF-ELSE         ');
console.log('-------------------------------------');

console.log('EXERCISE 4A');

var randomNumber = Math.random();

if (randomNumber >= 0.5) {
    console.log('Greater than or equal to 0,5');
}else {
    console.log('Lower than 0,5')
}

console.log('EXERCISE 4B');

var Age = 27;

if (Age < 2) {
    console.log('Bebe');
}
if (Age >= 2 && Age <= 12) {
    console.log('Niño');
}
if (Age >= 13 && Age <= 19) {
    console.log('Adolescente');
}
if (Age >= 20 && Age <= 30) {
    console.log('Adulto');
}
if (Age >= 31 && Age <= 60) {
    console.log('Adulto mayor');
}
if (Age > 75) {
    console.log('Anciano');
}