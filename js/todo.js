const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
const toDoText = document.getElementById("todo-text");
const toDos_KEY = "toDos"

let toDos = [];


function savetoDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = (event.target.parentElement);
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    savetoDos();
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.className = "listname";
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✗";
    button.className = "btn-outline-primary";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handletoDosubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    savetoDos();
}

toDoForm.addEventListener("submit", handletoDosubmit);


const savetoDo = localStorage.getItem("toDos");


if (savetoDo !== null) {
    const parsedtoDos = JSON.parse(savetoDo);
    toDos = parsedtoDos;
    parsedtoDos.forEach(paintToDo);
}
let today = new Date();
let month = today.getMonth() + 1;
let date = today.getDate();

toDoText.innerText = `${month}월 ${date}일 오늘도 화이팅 :)`