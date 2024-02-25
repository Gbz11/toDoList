const tasklist = document.getElementById('taskList');
const inputTask = document.getElementById('inputTask');


function addTask(){
  //créer une tâche
  let inputText = inputTask.value;

  if(inputText ==="" || inputText === null){
    return;
  }

  let li = document.createElement('li');
  li.innerHTML = inputText;
  tasklist.appendChild(li);


  //boutton pour modifier une tâche
  const updateLi = document.createElement('button');
  updateLi.innerHTML = 'Modifier';
  updateLi.onclick = function(){
    modifyTask(li)
  };

  //boutton pour supprimer une tâche
  const deleteLi = document.createElement('button');
  deleteLi.innerHTML = 'Supprimer';
  deleteLi.onclick = function (){
    deleteTask(li)
  };


  li.appendChild(updateLi);
  li.appendChild(deleteLi);
  inputTask.value = "";
}

//fonction pour modifier la saisie

function modifyTask(task){
  let taskElement = task.firstChild;
  let taskText = taskElement.textContent;
  let newTaskText = prompt('Modifier la tâche: ', taskText)

  taskElement.textContent = newTaskText;
  
  if(newTaskText === "" || newTaskText === null){
    return;
  }
}


//fonction pour supprimer la saisie

function deleteTask(task){
  tasklist.removeChild(task);
}

// Gérer le rafraichissement avec localstorage