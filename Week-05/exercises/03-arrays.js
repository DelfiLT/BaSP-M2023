console.log('-------------------------------------');
console.log('        EXERCISE 3 : ARRAYS          ');
console.log('-------------------------------------');

console.log('> EXERCISE 3A <');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
 'Noviembre', 'Diciembre'];

console.log('Answer: ' + months[5] + ', ' + months[11]);

console.log('> EXERCISE 3B <');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
 'Noviembre', 'Diciembre'];

console.log('Answer: ', months.sort());

console.log('> EXERCISE 3C <');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
 'Noviembre', 'Diciembre'];

months.unshift('Begin');
months.push('End');

console.log('Answer: ', months);

console.log('> EXERCISE 3D <');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
 'Noviembre', 'Diciembre'];

var shiftArray = months.shift();
var popArray = months.pop();

console.log('Answer: ' + shiftArray + ', ' + popArray);
console.log(months);

console.log('> EXERCISE 3E <');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
 'Noviembre', 'Diciembre'];

months.reverse();

console.log('Answer: ', months);

console.log('> EXERCISE 3F <');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
 'Noviembre', 'Diciembre'];

var joinArray = months.join('-');
console.log('Answer: ' + joinArray);

console.log('> EXERCISE 3G <');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
 'Noviembre', 'Diciembre'];

var sliceArray = months.slice(4, 11);
console.log('Answer: ', sliceArray);
