// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual form submission

  // Show message
  const messageEl = document.getElementById('formMessage');
  messageEl.style.display = 'block';

  // Optionally clear form fields
  this.reset();
});

// To-Do List Functionality
function addTask() {
  const input = document.getElementById('todoInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.className = 'complete-btn';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  document.getElementById('todoList').appendChild(li);
  input.value = '';
}
