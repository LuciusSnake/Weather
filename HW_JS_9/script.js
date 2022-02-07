const storage = localStorage.getItem('data')
const parsetStorage = storage ? JSON.parse(storage) : []
const data = parsetStorage
const formCreateElement = document.querySelector('#formCreate')
const listElement = document.querySelector('#list')

const inputSearchTitleElement = document.querySelector('#searchTitle')
const selectSortElement = document.querySelector('#sort')

let isEdit = false

//-------------------------------------------------------------

formCreateElement.addEventListener('submit', handleSubmitFormCreate)
inputSearchTitleElement.addEventListener('input', handleInputSearchTitle)
selectSortElement.addEventListener('change', handleChangeSort)
listElement.addEventListener('change', handleChangeTodo)
listElement.addEventListener('click', handleRemoveTodo)
listElement.addEventListener('click', handleEditTodo)
listElement.addEventListener('submit', handleSubmitFormEdit)
window.addEventListener('beforeunload', () => {
  const string = JSON.stringify(data)
  localStorage.setItem('data', string)
})
document.addEventListener('DOMContentLoaded', () => render(data))

//-------------------------------------------------------------

function handleSubmitFormCreate(event) {
  event.preventDefault()

  const date = new Date()
  const todo = {
    id: date.getTime(),
    createAt: date,
    isChecked: false,
  }
  const formData = new FormData(formCreateElement)

  for (let [name, value] of formData) {
    // console.log(name, value);
    todo[name] = value
  }

  data.push(todo)
  formCreateElement.reset()

  render(data)
}

function handleInputSearchTitle(event) {
  const { target } = event
  const queryString = target.value

  const matches = data.filter(item => {
    if(item.title.includes(queryString)) {
      return true
    }
  })
  render(matches)
}

function handleChangeSort(event) {
  const { target } = event
  const { value } = target

  let sortedData = []

  if(value) {
    sortedData = data.sort((a, b) => {
      if(+a[value] > +b[value]) return -1
      if(+a[value] == +b[value]) return 0
      if(+a[value] < +b[value]) return 1
    })
  } else {
    sortedData = data
  }

  render(sortedData)
}

function handleSubmitFormEdit(event) {
  event.preventDefault()

  const { target } = event

  const inputElement = target.querySelector('input[name="title"]')
  const { value } = inputElement
  const { id } = target.dataset

  data.forEach((item) => {
    if (item.id == id) {
      item.title = value
    }
  })

  const parrentElement = target.closest('.island__item')
  parrentElement.classList.remove('island__item_edit')

  isEdit = false
  render(data)
}

function todoTemplate({ title, id, isChecked, createAt, priority, estimate }) {
  const checkedAttr = isChecked ? 'checked' : ''
  const idAttr = 'todo:' + id
  const dateCreatedAt = buildDate(createAt)
  const stars = buildPriority(priority)

  return `
        <div class="island__item ${isChecked ? 'island__item_checked' : ''}">
            <div class="form-check d-flex align-items-center">
                <input class="form-check-input" type="checkbox" ${checkedAttr} id="${idAttr}" data-id="${id}">
                <label class="form-check-label ms-3" for="${idAttr}">
                    ${title}
                </label>

                <form class="form-edit ms-3" data-id="${id}">
                <input type="text" class="form-control" name="title" placeholder="Title" value="${title}"/>
                <button class="btn btn-md btn-primary ms-3" type="submit" data-role="save" data-id="${id}">Save</button>
                </form>

                <span class="badge bg-dark ms-auto">${stars}</span>

                <span class="ms-3">${estimate + 'h.'}</span>

                <time class="ms-3">${dateCreatedAt}</time>

                <button 
                class="btn btn-md btn-warning ms-3" 
                type="button" 
                data-role="edit" 
                data-id="${id}">
                Edit
                </button>

                <button 
                class="btn btn-md ms-3" 
                type="button" 
                data-role="remove" 
                data-id="${id}">
                ❌
                </button>
            </div>
        </div>
    `
}

function handleChangeTodo(event) {
  const { target } = event
  const { id } = target.dataset

  if(target.type != 'checkbox') return

  data.forEach((item) => {
    if (item.id == id) {
      item.isChecked = target.checked
    }
  })

  const parrentElement = target.closest('.island__item')
  parrentElement.classList.toggle('island__item_checked')
}

function handleRemoveTodo(event) {
    const { target } = event

    if(target.dataset.role != 'remove') return

    const { id } = target.dataset

    data.forEach((item, index) => {
        if (item.id == id) {
          data.splice(index, 1)
        }
      })

      render(data)
}

function handleEditTodo (event) {
  const { target } = event

  if(target.dataset.role != 'edit') return

  if(isEdit) {
    alert('Mission impossible')
    return
  }

  const parrentElement = target.closest('.island__item')
  parrentElement.classList.add('island__item_edit')

  isEdit = true
}

function transformTime(time) {
  return time < 10 ? `0${time}` : time
}

function buildDate(date) {
  const objectDate = new Date(date)
  const days = transformTime(objectDate.getDate())
  const month = transformTime(objectDate.getMonth() + 1)
  const year = transformTime(objectDate.getFullYear())

  return `${days}.${month}.${year}`
}

function buildPriority(count) {
  let stars = ''

  for(let i = 0; i < count; i++) {
    stars += '⭐'
  }
  return stars
}

function render(todoList) {
  let result = ''

  todoList.forEach((todo) => {
    const template = todoTemplate(todo)

    result = result + template
  })

  listElement.innerHTML = result
}



// class Car {
//   constructor(model, year) {
//     this.model = model
//     this.year = year
//   }
  
//   showInfo() {
//     console.log(this.model + ' ' + this.year);
//   }
// }
// const car = new Car('BMW', '2020')
// console.log(car);
// const car2 = new Car('Mercedes-Benz', '2019')
// console.log(car2);


// class Rectangle {
//   constructor(width, heigh, color) {
//     this.width = width
//     this.
//   }
// }