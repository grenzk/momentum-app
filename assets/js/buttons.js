const todoBtn = document.querySelector('#todo-button')
const todoList = document.querySelector('#todo-container')

function toggleTodo() {
  todoList.classList.toggle('show')
  todoList.classList.toggle('hide')
}

todoBtn.addEventListener('click', toggleTodo)