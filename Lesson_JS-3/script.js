const data = []
const formCreateElement = document.querySelector('#formCreate')
const listElement = document.querySelector('#list')

//---------------------------------------------------------------------------------

formCreateElement.addEventListener('submit', handleSubmitFormCreate)

//---------------------------------------------------------------------------------

function handleSubmitFormCreate(event) {
    event.preventDefault()
    
    const date = new Date()
    const todo = {
        id: date.getTime(),
        createdAt: date,
        isChecked: false
    }

    const formData = new FormData(formCreateElement)

    for(let [name, value] of formData) {
        console.log(name, value);
        todo[name] = value
    }

    data.push(todo)
    formCreateElement.reset()

    render()
}

function todoTemplate({id, title}) {
    const idAtr = 'todo' + id
    return `
        <div class="island__item">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="${idAtr}" />
                <label class="form-check-label" for="${idAtr}">
                    ${title}
                </label>
            </div>
        </div>
    `
}

function render () {
    let result = ''

    data.forEach((todo) => {
        const template = todoTemplate(todo.title, todo.id)

        result = result + template
    })

    listElement.innerHTML = result
}









localStorage.setItem('user', 'Valentin')
console.log(localStorage.getItem('user'));