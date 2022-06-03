const todoBtn = document.querySelector('#todo-button')
const todoList = document.querySelector('#todo-container')

function toggleTodo() {
  todoList.classList.toggle('show')
  todoList.classList.toggle('hide')
  if (todoList.classList.contains('hide')) {
    setTimeout(() => {
      todoList.style.left = '-100%'
    }, 500)
  } else {
    todoList.style.left = ''
  }
}

todoBtn.addEventListener('click', toggleTodo)
