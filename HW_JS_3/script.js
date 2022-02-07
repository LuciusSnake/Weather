//1.
console.log('Exercise 1')

function findPositiveNumbers(arr = [0]) {
  // let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
  let newArr = []
  for (let item of arr) {
    if (item > 0) {
      // console.log(item);
      newArr.push(item)
    }
  }
  console.log(newArr)
  return findPositiveNumbers
}
findPositiveNumbers([5, 4, 3, -3, -10, -1, 8, -20, 0])

//2.
console.log('Exercise 2')

let arr1 = [5, 4, 3, 8, 0]
function filterFor(arr1, a = 0) {
  let newArr1 = []
  for (let item of arr1) {
    if (item >= a) {
      newArr1.push(item)
    }
  }
  console.log(newArr1)
  return filterFor
}
filterFor(arr1, 3.11)

//3.1.
console.log('Exercise 3.1')

function nums() {
  let nums = [12, 65, -9, 6, 0, 14]
  let sum = 0
  let sumEven = 0
  for (let i = 0; i < nums.length; i++) {
    const currentItem = nums[i]

    console.log(currentItem)
    sum = sum + currentItem

    if (currentItem % 2 == 0) {
      sumEven = sumEven + currentItem
    }
  }
  console.log('Sum ' + '= ' + sum)
  console.log('Sum Even ' + '= ' + sumEven)
  return nums
}
nums()

//3.2.
console.log('Exercise 3.2')

function midSum() {
  let arr2 = [5, -9, 0, 5, 4, 6]
  let midSum = 0
  let sum2 = 0
  for (let item of arr2) {
    sum2 = item + sum2
  }

  midSum = sum2 / arr2.length
  console.log('MidSum ' + '= ' + midSum)

  return midSum
}
midSum()

//3.3.
console.log('Exercise 3.3')

function limitOfArr3 () {
    let arr3 = [5, 4, 3, 8, 0]
    let limit = 5
    let newArr3 = []
    for (let item of arr3) {
        if (item >= limit) {
            newArr3.push(item)
        }
    }
    console.log('Limit of Arr ' + '= ' + newArr3);
    return limitOfArr3
}
limitOfArr3 ()

//3.4.
console.log('Exercise 3.4')

function stringExercise () {
  let example = [
    { string: 'Пять', number: 5 },
    { string: 'Восемь', number: 8 },
    { string: 'Одиннадцать', number: 11 }
  ]

  for (let item of example) {
    if (item.number > 10) {
      console.log(item.string)
    }
  }
  return stringExercise
}
stringExercise ()

//3.5.
console.log('Exercise 3.5')

function fruitsExercise () {
  let fruits = ['Яблоко', 'Груша', 'Банан']
  let newFruits = []

  for (let item of fruits) {
    const fruit = {}

    fruit.word = item
    fruit.length = item.length

    console.log(fruit)
    newFruits.push(fruit)
  }
  console.log(newFruits)
  return fruitsExercise
}
fruitsExercise ()
