const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const deleteButtons = document.querySelectorAll('.deleteButton');

taskInput.addEventListener ('keyup', (e) =>{
    if (e.key === 'Enter') {
        addTask();
    }
})
addButton.addEventListener('click', addTask);

function addTask(){
   const taskText = taskInput.value.trim();
   if (taskText !== '') {
       const li = document.createElement('li');
       li.innerHTML = `
           <span class="taskText">${taskText}</span>
           <button class="deleteButton">Delete</button>
       `;
       taskList.appendChild(li);
         taskInput.value = '';

         const deleteButton = li.querySelector('.deleteButton');
         deleteButton.addEventListener('click', () => {
             taskList.removeChild(li);
         });
   } else {
       alert('Please enter a task.');   
   }
}