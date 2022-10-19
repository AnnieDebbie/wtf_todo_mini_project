const addTodoInput = document.getElementById("add-input-field");
const todoList = document.querySelector(".todo-list");
const form = document.querySelector(".add-todo-form");
let addBtn = document.getElementById("add-todo-btn");

function createListItem(enteredTodo) {
  let listItem = document.createElement("li");
  listItem.innerText = enteredTodo;
  listItem.classList.add("todo-item");
  todoList.prepend(listItem);
}

function renderError() {
  const errorDiv = `
  <div class=errorDiv> <p class="error-message"> Invalid input, please put in a Todo </p> </div>
  `;
  todoList.insertAdjacentHTML("afterbegin", errorDiv);
}

function submitHandler(e) {
  e.preventDefault();
  let enteredTodo = addTodoInput.value;
  createListItem(enteredTodo);
  enteredTodo.length <= 0 && renderError();
}

form.addEventListener("submit", submitHandler);
