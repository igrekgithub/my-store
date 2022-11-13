const h1 =document.querySelector('h1')
console.log(h1)
const newEl = document.createElement('div')
newEl.innerHTML = `<span  class="git-span">Всем Привет!!!!</span>`
console.log(newEl)
h1.after(newEl)
const newElem = document.createElement('ul')
newElem.innerHTML =
`<li></li>
 <li></li>
 <li></li>
 <li></li>`
 newElem.classList.add('roster')
console.log(newElem)
