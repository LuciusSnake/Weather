// Задание 1

const elemElement = document.querySelector('#elem')
elemElement.innerHTML = ''

//Задание 2

function listGenerator(parent) {
  const listWrapElement = document.querySelector('.list-wrap')
  const ulElement = document.createElement('ul')
  listWrapElement.append(ulElement)

  for (element of parent) {
    const content = prompt('What are you want?')
    if (content !== '' && content != null) {
      const liElement = document.createElement('li')
      liElement.textContent = content
      ulElement.append(liElement)
    } else break
  }
}

listGenerator('.list-wrap')

//Задание 3

let linksArr = [
  'https://geekytheory.com/content/images/size/w2000/2020/02/distribuciones-linux-ligeras.jpg',
  'https://cdn-media-1.freecodecamp.org/images/1*kt9otqHk14BZIMNruiG0BA.png',
  'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-1520x800.png',
  'https://habrastorage.org/webt/jp/qj/fk/jpqjfkjewyfpm1cbr5yxaubxt-w.png',
  'https://miro.medium.com/max/700/1*m0UdF7LWONe3lXtfbfiS5g.png',
]

const divElement = document.createElement('div')
divElement.style.display = 'flex'

linksArr.forEach((item) => {
    const imgElement = document.createElement('img')
    imgElement.setAttribute('src', item)
    divElement.append(imgElement)
    imgElement.classList.add('pic')
    imgElement.style.width = '19%'
})

document.body.append(divElement)
