const tasklist = document.getElementById('taskList');
const inputTask = document.getElementById('inputTask');


function addTask(){
  //créer une tâche
  let inputText = inputTask.value;

  if(inputText ===""){
    return;
  }

  let li = document.createElement('li');
  li.innerHTML = inputText;
  tasklist.appendChild(li);


  //modifier une tâche
  const updateLi = document.createElement('button');
  updateLi.innerHTML = 'Modifier';
  updateLi.onclick = function(){
    modifyTask()
  };

  //supprimer une tâche
  const deleteLi = document.createElement('button');
  deleteLi.innerHTML = 'Supprimer';
  deleteLi.onclick = function (){
    deleteTask()
  };


  li.appendChild(updateLi);
  li.appendChild(deleteLi);
  inputTask.value = "";
}

//modifié la saisie
function modifyTask(){
  
}


//supprimer la saisie

function deleteTask(){}