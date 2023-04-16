console.log('-------------------------------------');
console.log('        EXERCISE 6 : FUNCTIONS       ');
console.log('-------------------------------------');

console.log('> EXERCISE 6A <');

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

var numbersAdd = add(5, 7);
console.log('Answer: ' + numbersAdd);

console.log('> EXERCISE 6B <');

function add(firstNum, secondNum) {
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
        alert("One of the parameters it's not a number");
        return NaN;
    }else {
        return firstNum + secondNum;
    }
}

var NaNAdd = add(':)', 5);
console.log('Answer: ' + NaNAdd);

console.log('> EXERCISE 6C <');

function validateInteger(number) {
    if (typeof number === 'number' && number % 1 === 0) {
        return true;
    }else {
        return false;
    }
}

var integerNum = validateInteger(5);
console.log('Integer Number: ' + integerNum);

var floatNum = validateInteger(5.3);
console.log('Float Number: ' + floatNum);

console.log('> EXERCISE 6D <');

function convertToInteger(firstNum, secondNum) {
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
        alert("One of the parameters it's not a number");
        return NaN;
    }
    if (!validateInteger(firstNum)) {
        alert("The first number wasn't an integer: " + firstNum);
        return Math.round(firstNum);
    }
    if (!validateInteger(secondNum)) {
        alert("The second number wasn't an integer: " + secondNum);
        return Math.round(secondNum);
    }
    alert('Both are integer numbers!');
    return firstNum + secondNum;
}

var NaNNum = convertToInteger(':p', 5);
console.log('Number validation: ' + NaNNum);

var firstNumFloat = convertToInteger(6.5, 2);
console.log('Converted to: ' + firstNumFloat);

var secondNumFloat = convertToInteger(8, 5.07);
console.log('Converted to: ' + secondNumFloat);

var bothInteger = convertToInteger(5, 10);
console.log('Integer add: ' + bothInteger);

console.log('> EXERCISE 6E <');

function validate(firstNum, secondNum) {
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
        alert("One of the parameters it's not a number");
        return NaN;
    }
    if(!validateInteger(firstNum)) {
        alert("The first number wasn't an integer: " + firstNum);
        return Math.round(firstNum);
    }
    if (!validateInteger(secondNum)) {
        alert("The second number wasn't an integer: " + secondNum);
        return Math.round(secondNum);
    }
}

function allValidationsAdd(firstNum, secondNum){
    var validation = validate(firstNum, secondNum);

    if (typeof validation === 'number') {
        return validation;
    }else {
        return firstNum + secondNum;
    }
}

var lastNaN = allValidationsAdd(':D', 5);
console.log('Number validation: ' + lastNaN);

var lastFirstFloat = allValidationsAdd(8.4, 7);
console.log('Converted to: ' + lastFirstFloat);

var lastSecondFloat = allValidationsAdd(4, 11.9);
console.log('Converted to: ' + lastSecondFloat);

var lastAdd = allValidationsAdd(10, 20);
console.log('Integer add: ' + lastAdd);

console.log('-------------------------------------');
console.log('              THE END :D             ');
console.log('-------------------------------------');