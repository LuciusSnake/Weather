// 1.
const buttonElement = document.querySelector('.counter')
let i = 0

buttonElement.addEventListener('click', function () {
  i += 1
  buttonElement.innerHTML = 'Counter ' + i
  if (i >= 10) {
    buttonElement.style.backgroundColor = 'red'
  }
})

//2. Сделать при помощи js, html и css открывающееся меню. При клике на "бургер",
//открывается меню и значок "бургер" превращается в "Х", который при клике закрывает меню.
// Посмотреть пример можно на dev.by. Стили и содержание меню на ваше усмотрение.

const burgerElement = document.querySelector('.burger')
const listElements = document.querySelector('.list-wrapper')

function handleClickBurger(event) {
  const isHidden = listElements.classList.contains('hidden')
  if (isHidden != true) {
    listElements.classList.add('hidden')
    burgerElement.classList.add('show-burger')
  } else {
    listElements.classList.remove('hidden')
  }
}

burgerElement.addEventListener('click', handleClickBurger)

// 3.
//Сделать модальное окно.
//При клике на кнопку показываем окно (содержание любое), в правом верхнем углу кнопка "Х", которая закрывает модальное окно.

const windowWrapperElement = document.querySelector('#windowWrapper')
const buttonOpenWindowElement = document.querySelector('#buttonOpenWindow')
const buttonCloseWindowElement = document.querySelector('#buttonCloseWindow')

buttonOpenWindowElement.addEventListener('click', () => {
    windowWrapperElement.classList.add('show')
})

buttonCloseWindowElement.addEventListener('click', () => {
    windowWrapperElement.classList.remove('show')
})
