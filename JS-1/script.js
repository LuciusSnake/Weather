console.log('aaa');
console.log(2+3);


// Типы данных
// 1. number


let num = "5";
console.log(typeof num);

// num = 6;
// console.log(num);

// const num = 7;
// console.log(num);

// 2. string - строка

// 3. boolean (true, false)
let valid = true;
console.log(typeof valid);

// 4. undefind - не присвоенное значение 
let c
console.log(c);

// 5. null
// 6. simbol
// 7. object
// 8. bigInt

let sum = 'text' * 5;
console.log(sum);

// NaN - not a number

let d = 20;
let e = d + 5;
console.log(e);

let ost = 10 % 3;
console.log(ost);

let user = 'Alex'
let comment = "Hello, " + user + "! " + "Have a nice day!"
console.log(comment);

// // Взаимодействие с пользователем

// alert('Hello');

// // Задать вопрос пользователю
// let answer = +prompt('Сколько Вам лет?', '');
// console.log(answer);

// // Задать вопрос пользователю 2
// let answer2 = confirm('Вам точно есть 18 лет?')
// console.log(answer2);


// Операторы сравнения (< > <= >= == === (&& - и) (|| - или))
alert (2 > 1);
alert (2 >= 2);
alert (10 >= 20);
alert ('10' == 10);

// if (условие) {выполнение если условие верно}
// else {выполнение если условие неверно}

let a = 10;
if (a > 5) {
    alert('Бинго');
} else {
    alert('Неверно');
}



let result = +prompt('Укажите произвольное число...')
if (result < 10) {
     alert('Мало');
} else if (result >= 10 && result < 20 ) {
    alert ('Отлично');
} else if (result >= 20) {
    alert ('Многовато')
} else {
    alert('Произошла ошибка')
}
