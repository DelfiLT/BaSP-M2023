console.log('-------------------------------------');
console.log('        EXERCISE 5 : FOR             ');
console.log('-------------------------------------');

console.log('> EXERCISE 5A <');

var words = ['Hello', 'everyone', 'this', 'is', 'RadiumRocket'];

for (i = 0 ; i < words.length; i++) {
    alert(words[i]);
}

console.log('> EXERCISE 5B <');

for (i = 0 ; i < words.length; i++) {
    alert(words[i][0].toUpperCase() + words[i].substring(1));
}

console.log('> EXERCISE 5C <');

var sentence = '';

for (i = 0 ; i < words.length; i++) {
    sentence = sentence + ' ' +  words[i];
}

alert('Answer: ' + sentence);

console.log('> EXERCISE 5D <');

var emptyArray = [];

for (i = 0 ; i < 10; i++) {
    emptyArray.push(i);
}

console.log('Answer: ', emptyArray);