const addTodoInput = document.getElementById("add-input-field");
const todoList = document.querySelector(".todo-list");
const form = document.querySelector(".add-todo-form");
let addBtn = document.getElementById("add-todo-btn");

function createListItem(enteredTodo){
    let listItem = document.createElement("li");
    listItem.innerText = enteredTodo;
    listItem.classList.add('todo-item')
}

function submitHandler(e) {
  e.preventDefault();
  let enteredTodo = addTodoInput.value;
  createListItem(enteredTodo)
  todoList.prepend(listItem);
}

form.addEventListener("submit", submitHandler);

