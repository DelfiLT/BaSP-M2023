console.log('-------------------------------------');
console.log('        EXERCISE 2 : STRINGS         ');
console.log('-------------------------------------');

console.log('> EXERCISE 2A <');

var lowerCase = 'radiumrocket';
console.log('Answer: ' + lowerCase.toUpperCase());

console.log('> EXERCISE 2B <');

var fiveCharacters = lowerCase.substring(0,5);
console.log('Answer: ' + fiveCharacters);

console.log('> EXERCISE 2C <');

var threeCharacters = lowerCase.substring(9,12);
console.log('Answer: ' + threeCharacters);

console.log('> EXERCISE 2D <');

var firstCharacter = lowerCase.substring(0,1).toUpperCase() + lowerCase.substring(1).toLowerCase();
console.log('Answer: ' + firstCharacter);

console.log('> EXERCISE 2E <');

var spacedString = 'Radium Rocket';

var spaceFind = spacedString.indexOf(' ');
console.log('Answer: ' + spaceFind);

console.log('> EXERCISE 2F <');

var longString = 'radiumrocket radiumrocket';

var gap = longString.indexOf(' ');
var firstString = longString.substring(0,gap);
var secondString = longString.substring(gap + 1);

var firstStringMod = firstString[0].toUpperCase() + firstString.substring(1).toLowerCase();
var secondStringMod = secondString[0].toUpperCase() + secondString.substring(1).toLowerCase();

var longStringModified = firstStringMod + ' ' + secondStringMod;
console.log('Answer: ' + longStringModified);