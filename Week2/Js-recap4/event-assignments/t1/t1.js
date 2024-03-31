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

// Select the <ul> element where todo items will be displayed
const todoListElement = document.querySelector('ul');

// Select the dialog element
const dialog = document.querySelector('dialog');

// Select the "Add Item" button
const addButton = document.querySelector('.add-btn');

// Function to render todo items
function renderTodoList() {
  // Clear the existing todo list
  todoListElement.innerHTML = '';

  // Loop through each todo item in the array
  todoList.forEach(item => {
    // Create <li> element for each todo item
    const listItem = document.createElement('li');

    // Create checkbox input for marking item as completed
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed; // Set initial checkbox state based on item's completion status
    checkbox.addEventListener('change', function() {
      // Update todo item's completion status when checkbox is clicked
      item.completed = this.checked;
      console.log(todoList); // Log updated todo list to console
    });

    // Create label for displaying todo item text
    const label = document.createElement('label');
    label.textContent = item.task;

    // Append checkbox and label to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    // Create delete button for removing todo item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      // Remove the todo item from the array
      const index = todoList.indexOf(item);
      if (index !== -1) {
        todoList.splice(index, 1);
        console.log(todoList); // Log updated todo list to console
        renderTodoList(); // Re-render the todo list
      }
    });

    // Append delete button to the list item
    listItem.appendChild(deleteButton);

    // Append list item to the <ul> element
    todoListElement.appendChild(listItem);
  });
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get input value from form
  const inputField = event.target.querySelector('input[type="text"]');
  const task = inputField.value.trim(); // Trim whitespace from input

  // Add new todo item to the array
  if (task) {
    const newItem = {
      id: todoList.length + 1, // Generate unique ID for new item
      task,
      completed: false, // Set completed status to false by default
    };
    todoList.push(newItem);
    console.log(todoList); // Log updated todo list to console
    renderTodoList(); // Re-render the todo list
    inputField.value = ''; // Clear input field after adding item
    dialog.close(); // Close the dialog after adding item
  }
}

// Add event listener to form for handling submission
document.querySelector('dialog form').addEventListener('submit', handleFormSubmit);

// Add event listener to "Add Item" button to open modal dialog
addButton.addEventListener('click', function() {
  dialog.showModal();
});

// Render initial todo list
renderTodoList();

