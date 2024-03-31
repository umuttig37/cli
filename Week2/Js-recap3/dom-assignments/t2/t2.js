// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const ulElement = document.getElementById('todo-list');

if (ulElement && todoList.length > 0) {
  todoList.forEach(todo => {
    const liElement = document.createElement('li');
    const checkboxId = `todo-${todo.id}`;
    const isChecked = todo.completed ? 'checked' : '';

    const inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    inputElement.id = checkboxId;
    inputElement.checked = todo.completed;

    const labelElement = document.createElement('label');
    labelElement.htmlFor = checkboxId;
    labelElement.textContent = todo.task;

    liElement.appendChild(inputElement);
    liElement.appendChild(labelElement);

    ulElement.appendChild(liElement);
  });
} else {
  console.error('Todo list or <ul> element not found.');
}
