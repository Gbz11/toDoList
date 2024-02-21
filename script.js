const tasklist = document.getElementById('taskList');

function addTask(){
  const inputTask = document.getElementById('inputTask');
  const inputText = inputTask.value;
  let li = document.createElement('li');
  li.innerHTML = inputText;
  tasklist.appendChild(li);

if(inputText ===""){
  return;
}
}

