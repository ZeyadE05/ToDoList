const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  const deleteBtn = document.createElement('button');
  // const completeBtn = document.createElement('button');
  const statusSelect = document.createElement('select');
  statusSelect.classList.add('status-select'); // For styling the dropdown
  const statusOptions = [
    { value: 'not-stated', text: 'Not Stated' },
    { value: 'in-progress', text: 'In Progress' },
    { value: 'completed', text: 'Completed' }
  ];
  statusOptions.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt.value;
    option.textContent = opt.text;
    statusSelect.appendChild(option);
  });
  li.classList.add('not-stated');
  statusSelect.addEventListener('change', () => {
    // Remove all possible status classes first
    statusOptions.forEach(opt => {
      li.classList.remove(opt.value);
    });

    // Add the newly selected status class
    li.classList.add(statusSelect.value);
  });
  li.classList.add('task-item');
  // completeBtn.textContent = 'Not Completed';
  // completeBtn.classList.add('complete-btn');
  // completeBtn.addEventListener('click', () => {
    // li.remove();
    // li.classList.toggle('completed');
    // li.classList.toggle('task-item');
    // completeBtn.classList.toggle('complete-btn');
    // completeBtn.classList.toggle('completed-btn');
    // completeBtn.textContent = li.classList.contains('completed') ? 'Completed' : 'Not Completed';
  });
  li.textContent = taskText;
  // li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });
  li.appendChild(statusSelect);
  taskList.appendChild(li);

  taskInput.value = '';
});
