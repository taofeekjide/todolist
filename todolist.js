const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  date: '2022-12-22'
}];

displayTodo()

function displayTodo() {
  let todoListHTML = ''

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const date = todoObject.date;
    const html = `
      <div>${name}</div> 
      <div>${date}</div>
      <button onclick= "
        todoList.splice(${i}, 1);
        displayTodo();
      " class = "delete-button">Delete</button>
    `
    todoListHTML += html;
  }
  document.querySelector('.js-todo-display').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.todo-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-todo-date');
  const date = dateInputElement.value;

  todoList.push({
    name : name,
    date : date
  });

  inputElement.value = '';

  displayTodo();

  localStorage.setItem('todoList', JSON.stringify(todoList));
}