// 1.
// setInterval(() => actualTime.hidden = !actualTime.hidden, 1000)

const actualTime = document.querySelector('.actual-time')
actualTime.classList.add('clockStyle')

function transformTime(item) {
    return item < 10 ? `0${item}` : item
}

function time() {
    const currentDate = new Date()
    let hours = currentDate.getHours()
    hours = transformTime(hours)
    let minutes = currentDate.getMinutes()
    minutes = transformTime(minutes)
    let seconds = currentDate.getSeconds()
    seconds = transformTime(seconds)
    let sec = ':'
    
    let showTime = `${hours}` + ' ' + sec + ' ' + `${minutes}` + ' ' + sec + ' ' + `${seconds}`

    return showTime
}

function renderTime() {
    actualTime.textContent = time()
}
renderTime()

let timer = setInterval(renderTime, 1000)