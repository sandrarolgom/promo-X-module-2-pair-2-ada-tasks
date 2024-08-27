'use strict';
/*const tasks = [
  { name: 'Recoger setas en el campo', completed: true, id: 1 },
  { name: 'Comprar pilas', completed: true, id: 2 },
  { name: 'Poner una lavadora de blancos', completed: true, id: 3 },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
    id: 4,
  },
];
*/

const listUl = document.querySelector('.js-list');
const GITHUB_USER = "Ankaankita1988";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

let tasks =[];

/*
    escuchar eventos del usuario--> datos de entrada
    modificar mis datos 
    datos de salida--> mostrar al usuario cambios
*/

const handleCheckbox = (ev) => {
  const taskClicked = parseInt(ev.target.id);
  const positionTask = tasks.findIndex((task) => task.id === taskClicked);
  tasks[positionTask].completed = !tasks[positionTask].completed;
  renderTasks(tasks);
  localStorage.setItem('data', JSON.stringify(tasks));
};
//escuchar eventos sobre los checkbox
function listenCheckbox() {
  const inputsCheckbox = document.querySelectorAll('.js-checkbox');
  for (let i = 0; i < inputsCheckbox.length; i++) {
    //cada input --> inputsCheckbox[i]
    inputsCheckbox[i].addEventListener('click', handleCheckbox);
  }
}

const renderTasks = (array) =>{
  listUl.innerHTML='';
  for (let i = 0; i < array.length; i++) {
      const liElement = document.createElement('li');
      listUl.appendChild(liElement);
      liElement.setAttribute('class', `${array[i].completed ? 'line' : null}`);
      const setInput = document.createElement('input');
      setInput.setAttribute('type', 'checkbox');
      liElement.appendChild(setInput);
      setInput.setAttribute('class', 'js-checkbox');
      setInput.setAttribute('id', `${array[i].id}`);
      if(array[i].completed){
        setInput.checked=true
      }
      const liElementText = document.createTextNode(`${array[i].name}`);
      liElement.appendChild(liElementText);     
  }
  listenCheckbox();
};
renderTasks(tasks);

const btnSearch = document.querySelector('.js-btn-filter');
const inputSearch = document.querySelector('.js-text-task-filter');

const handleSearch = (event) => {
  event.preventDefault();
  const valueInput = inputSearch.value;
  const filterTasks = tasks.filter((task) => task.name.includes(valueInput));
  renderTasks(filterTasks);
};
btnSearch.addEventListener('click', handleSearch);


const tasksLocalStorage = JSON.parse(localStorage.getItem('data'));
  // si (existe el listado de tareas en Local Storage)
  console.log(tasksLocalStorage);
if (tasksLocalStorage !== null) {
  // pinta la lista de tareas almacenadas en tasksLocalStorage
  tasks = tasksLocalStorage;
  renderTasks(tasksLocalStorage);
}
//sino existe el listado de tareas en el local storage
  else {
  // pide los datos al servidor
  fetch(SERVER_URL)
    .then(response=>response.json())
    .then(data=>{
    console.log(data);
    tasks=data.results;
    renderTasks(tasks);

    localStorage.setItem('data', JSON.stringify(data.results)); //para que salgan los datos en el localstorage
  });
}