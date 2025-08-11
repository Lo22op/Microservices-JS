const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

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



// ####################################
let i = 0;


while(i < 10){
    console.log(i);
    i++;
    if (i === 5) {
        console.log('Reached 5, breaking the loop.');
        break;
    }
}


// ############################################


function num(...num){
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return `The sum is: ${sum}`;
}


console.log(num(1, 2, 3, 4, 50)); 