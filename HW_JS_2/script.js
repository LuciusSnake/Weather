let arr = [2, 5, 8, 15, 14, -4, 0, 4]
for (let item of arr) {
}
console.log(arr)

for (let i = -Infinity; i == arr; i++) {
  i == arr
}
console.log(arr)

let result = 0
for (let item of arr) {
  result = item + result
}
console.log(result)

let sumEven = 0
let a = 0
for (let item of arr) {
  if (item % 2 == 0) {
    a = item
  }
  sumEven = a + sumEven
}
console.log(sumEven)   // не понимаю почему результат больше на 10

let midSum = 0
let sum1 = 0
let arr1 = [5, -9, 0, 5, 4, 6]
for (let item of arr1) {
  sum1 = item + sum1
}
midSum = sum1 / arr1.length
console.log(midSum)

let arr2 = [5, 4, 3, 8, 0]
let limit = 5
let newArr = []
for (let item of arr2) {
  if (item >= limit) {
    newArr[newArr.length] = item
  }
}
console.log(newArr)

let newArr1 = []
let arr3 = [
  {
    string: 'Пять',
    number: 5,
  },

  {
    string: 'Десять',
    number: 10,
  },

  {
    string: 'Пятнадцать',
    number: 15,
  },

  {
    string: 'Один',
    number: 1,
  },
]

for (let item of arr3) {
  if (item > 10) {
    newArr1[newArr1.length] = item
  }
}
// console.log(newArr1)
console.log(item);
// это задание вообще мимо (не понимаю как обратиться к number'ам)

let arr4 = ['картошка', 'помидор', 'огурец', 'чеснок', 'бобы']
let word = 0
let length = 0
for (let item of arr4) {
  word = item
  length = item.length
  console.log(word + ' ' + '-' + ' ' + length);
}

let arr5 = [5, 4, 3, -3, -10, -1, 8, -20, 0]
let newArr2 = []
for (let item of arr5) {
  if (item >= 0) {
    newArr2[newArr2.length] = item
  }
}
console.log(newArr2)
