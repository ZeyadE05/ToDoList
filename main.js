const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keydown', (event) => {
  // Check if the key pressed was 'Enter'
  if (event.key === 'Enter') {
    
    // Prevent the default 'Enter' behavior 
    // (like submitting a form)
    event.preventDefault(); 
    
    // Programmatically "click" the add task button
    addTaskBtn.click();
  }
});

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  // --- 1. Create List Item & Set Classes ---
  const li = document.createElement('li');
  li.classList.add('task-item'); // Base class for all tasks
  li.classList.add('not-started'); // Default status class

  // --- 2. CRITICAL CHANGE: Create a <span> for Text ---
  // We create a separate element for the text
  // This avoids erasing your buttons when you set li.textContent
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskSpan.classList.add('task-text'); // Optional, for styling

  // --- 3. Create Delete Button (Your Code) ---
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => {
    li.remove(); // This is correct
  });

  // --- 4. Create Status Dropdown (Your Code) ---
  const statusSelect = document.createElement('select');
  statusSelect.classList.add('status-select');
  const statusOptions = [
    { value: 'not-started', text: 'Not Started' },
    { value: 'in-progress', text: 'In Progress' },
    { value: 'completed', text: 'Completed' }
  ];

  statusOptions.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt.value;
    option.textContent = opt.text;
    statusSelect.appendChild(option);
  });

  // --- 5. Add Status Change Listener (Your Code) ---
  // This logic is perfectly correct. It safely
  // removes any old status and adds the new one.
  statusSelect.addEventListener('change', () => {
    // Remove all possible status classes
    statusOptions.forEach(opt => {
      li.classList.remove(opt.value);
    });
    // Add the new, selected status class
    li.classList.add(statusSelect.value);
  });

  // --- 6. Append All Parts to the <li> ---
  // Now we add the text span, delete button, and select
  // menu as three separate children.
  li.appendChild(taskSpan);
  li.appendChild(statusSelect);
  li.appendChild(deleteBtn);

  // --- 7. Add the <li> to the Page ---
  taskList.appendChild(li);

  taskInput.value = '';
});