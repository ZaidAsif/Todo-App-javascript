let todoInput = document.querySelectorAll(".todo-input")[0];
let todoListDiv = document.querySelectorAll(".todo-lists")[0];

function add() {
    let newTodo = todoInput.value;
    printAllTodos(newTodo);
    todoInput.value = '';
}

function printAllTodos(todoText) {
    let newTodoItem = makeTodoEl(todoText);
    todoListDiv.appendChild(newTodoItem);
}

function makeTodoEl(newTodoText) {
    let pEl = document.createElement("P");
    let pText = document.createTextNode(newTodoText);
    pEl.appendChild(pText);
    pEl.setAttribute("class", "output-text")

    let delBtn = document.createElement("BUTTON");
    let delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    delBtn.setAttribute("onClick", "deleteTodo(this)");
    delBtn.setAttribute("class", "del-btn")

    let editBtn = document.createElement("BUTTON");
    let editText = document.createTextNode("Edit");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onClick", "editTodo(this)");
    editBtn.setAttribute("class", "edit-btn")

    pEl.appendChild(delBtn);
    pEl.appendChild(editBtn);

    return pEl;
}

function deleteTodo(el) {
    let targetNode = el.parentNode;
    todoListDiv.removeChild(targetNode);
}

let addTodoContainer = document.querySelectorAll("#add-todo-container")[0];
let editTodoContainer = document.querySelectorAll("#edit-todo-container")[0];
let editInput = document.querySelectorAll(".edit-todo-input")[0];
let editValue;

function editTodo(el) {
    editValue = el.parentNode.childNodes[0];
    editInput.value = editValue.nodeValue;
    addTodoContainer.className += ' hide';
    editTodoContainer.className = '';
}

function updateTodo() {
    editValue.nodeValue = editInput.value;
    addTodoContainer.className = '';
    editTodoContainer.className += ' hide';
}