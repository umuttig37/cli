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

const ulElement = document.querySelector('ul');

todoList.forEach(todo => {
  const liElement = document.createElement('li');
  const checkboxId = `todo-${todo.id}`;
  const isChecked = todo.completed ? 'checked' : '';
  liElement.insertAdjacentHTML('beforeend', `
    <input type="checkbox" id="${checkboxId}" ${isChecked}>
    <label for="${checkboxId}">${todo.task}</label>
  `);
  ulElement.appendChild(liElement);
});
