let result = +prompt ('Укажите произвольное число...')
if (result > 0) {
    alert ('1');
} else if (result == 0) {
    alert ('0');
} else if (result < 0) {
    alert ('-1');
}

// let number = +prompt ('Возвести в квадрат число...')
// if (number < 100) {
//     console.log(number ** 2);
// } else if (number >= 100) {
//     alert ('Введите число меньше 100')
// }

const number = +prompt ('Введите число')
for (let i = 0; i < number; i++) {
    console.log(i ** 2);
}

let name = prompt ('Введите имя...')
let name2 = prompt ('Еще разочек...')
let name3 = prompt ('Не расслышал...')
alert(name + ' ' + name2 + ' ' + name3)

let a = +prompt ('Введите число...')
let a2 = +prompt ('Повторите операцию...')
let a3 = +prompt ('Давай по той же схеме...')
alert (a+ a2 + a3)

function numberFactorial (num) {
    for (let i = num - 1; i >= 1; i--) {
        num = num * i
    }
    return num
}
alert (numberFactorial (6));

let num;
do {
  num = +prompt("Введите число больше 100...");
} while (num <= 100 && num);