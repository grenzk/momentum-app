const container = document.querySelector('ul')
const listItems = document.querySelectorAll('ul li')
const spanItems = document.querySelectorAll('li span')
const addInput = document.querySelector('#add-todo')
const toggle = document.querySelector('#toggle')

function deleteToDo(item) {
  item.addEventListener('click', function (e) {
    this.parentElement.remove()
    e.stopPropagation()
  })
}

function completeToDo(item) {
  item.addEventListener('click', function () {
    this.classList.toggle('completed')
  })
}

function addToDo(e) {
  let newItem = addInput.value
  if (e.which === 13 && newItem !== '') {
    let li = document.createElement('li')
    let span = document.createElement('span')
    let i = document.createElement('i')
    let attr = document.createAttribute('draggable')

    addInput.value = ''

    i.classList.add('bx', 'bxs-trash')
    span.classList.add('todo-object')
    attr.value = 'true'

    li.setAttributeNode(attr)
    li.appendChild(span)
    li.appendChild(document.createTextNode(newItem))
    span.appendChild(i)
    container.prepend(li)

    // addEventsDragAndDrop(li)
    completeToDo(li)
    deleteToDo(span)

    toggle.classList.toggle('bxs-minus-square')
    toggle.classList.toggle('bxs-plus-square')
  }
}

function toggleInput() {
  this.classList.toggle('bxs-plus-square')
  this.classList.toggle('bxs-minus-square')

  if (this.classList.contains('bxs-minus-square')) {
    addInput.style.display = 'block'
    addInput.value = ''
  } else {
    addInput.style.display = 'none'
  }
}

;[].forEach.call(listItems, function (item) {
  //addEventsDragAndDrop(item)
  completeToDo(item)
})
;[].forEach.call(spanItems, function (item) {
  deleteToDo(item)
})

toggle.addEventListener('click', toggleInput)
addInput.addEventListener('keypress', addToDo)
