document.addEventListener("DOMContentLoaded", () => {
  // const form = document.getElementById('create-task-form');
  const form = document.querySelector('#create-task-form')
  const userInput = document.querySelector('#new-task-description');
  // const userInput = document.getElementById('new-task-description')
  // const ul = document.getElementById('tasks')
  const ul = document.querySelector('#tasks')
  const deleteMe = document.createElement('button')
  
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const myListItem = document.createElement('li');
    const deleteMe = document.createElement('button');
    myListItem.textContent = userInput.value;
    deleteMe.textContent = 'x';
    ul.appendChild(myListItem);
    myListItem.appendChild(deleteMe);
    userInput.value = "";
    deleteMe.addEventListener('click', (event) => myListItem.remove());
  });
});

function updateHeader(header){
  let h1 = document.querySelector('h1')
  h1.textContent = header
  h1.id = "hider"
  h1.className = 'header'
}
updateHeader('task')

//ADD A DROPDOWN MENU
function dropDown(){
  
}








