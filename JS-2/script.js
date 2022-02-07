// console.log('Hello');

// Переменные
let word = 'Hello'

// Перезапись переменной:
word = 'Test'
console.log(word)

const pi = 3.14
console.log(pi)


// Типы данных
// String '', ' ', '12', 'string'
// Number 0, Infinity, -Infinity, 14, 5, 5.5, NaN
// Boolean true/false
// Null null
// Undefind undefind
// Object {} [] function regexp


// Математические операторы:
// +, -, *, /, **, %, Math
console.log(10**5);

let counter = 0
// counter = counter + 1
// counter += 1

// Инкремент
counter++ // постфиксная
++counter // префиксная

let sum = 0
// let resultSum = sum++
let resultSum = ++sum
console.log(resultSum);

//Декремент
// counter--   постфиксная
// --counter   префиксная

console.log(counter);

// Конкатонация строк - вкладывание одной строки в другую
const startString = 'Hello user'
console.log(startString + ' ' + 'Alex');
console.log(startString + ' ' + 'Vadim');

// Операторы сравнения
// >, <, <=, >=, ==, ===, !=, !==
console.log(10 < 20); // true
console.log(0 > -5); // true
console.log(25 <= 23);  // false
console.log(25 >= 23); // true

//Неявное преобразование типов (String, Number, Boolean)
console.log(10 < '20'); // true
console.log(nul == undefind);  // true
console.log(' ' > 10); // false
console.log(null - 5); // -5
