'use strict';
const tasks = [
  { name: 'Recoger setas en el campo', completed: true, id: 1 },
  { name: 'Comprar pilas', completed: true, id: 2 },
  { name: 'Poner una lavadora de blancos', completed: true, id: 3 },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
    id: 4,
  },
];

const listUl = document.querySelector('.js-list');
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
};
//escuchar eventos sobre los checkbox
function listenCheckbox() {
  const inputsCheckbox = document.querySelectorAll('.js-checkbox');
  for (let i = 0; i < inputsCheckbox.length; i++) {
    //cada input --> inputsCheckbox[i]
    inputsCheckbox[i].addEventListener('click', handleCheckbox);
  }
}
// pintar  lista de tareas
const renderTasks = (array) => {
  listUl.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    //cada tarea --> task[i] ->  { name: 'x', completed: x, id: x },
    listUl.innerHTML += `
     <li class= "${array[i].completed ? 'line' : null}">
        <input type="checkbox"  ${
          array[i].completed ? 'checked' : null
        } class="js-checkbox" id="${array[i].id}"/>
        ${array[i].name}
    </li>
    `;
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