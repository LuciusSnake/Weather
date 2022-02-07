// 1.

const inputTextElement = document.querySelector('#inputText')
const textElement = document.querySelector('.text')

inputTextElement.addEventListener('input', () => {
    textElement.textContent = 'Клиент набирает: ' + inputTextElement.value
})

// 2.

const formElement = document.querySelector('#form')
const inputElement = document.querySelector('#input')

const listWrappElement = document.createElement('ul')
document.body.append(listWrappElement)

formElement.addEventListener('submit', (event) => {
    event.preventDefault()

    const listElement = document.createElement('li')
    listElement.textContent = inputElement.value
    listWrappElement.append(listElement)

    formElement.reset()
})

// 3.

const resultElement = document.createElement('div')
document.body.append(resultElement)

const calcElement = document.querySelector('#calc')
const selectElement = document.querySelector('#select')

const inputCalcElement = document.querySelector('#inputCalc')
const inputCalcTwoElement = document.querySelector('#inputCalcTwo')

function handleSubmit(event) {
    event.preventDefault()

    const { value: operator } = selectElement
    const input1 = +inputCalcElement.value
    const input2 = +inputCalcTwoElement.value
    let result = 0

    switch(operator) {
        case '+':
            result = input1 + input2
            break
        case '-':
            result = input1 - input2
            break
        case '*':
            result = input1 * input2
            break
        case '/':
            result = input1 / input2
            break
    }
    resultElement.textContent = 'Result = ' + result
}
calcElement.addEventListener('submit', handleSubmit)



