'use strict';
const tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
      id: 4,
    },
  ];
const checkboxList = document.querySelector('.js-list');

for (const task of tasks) {
  let checkLine = '';
    if (task.completed === true){
    checkLine = 'line';
    }
  checkboxList.innerHTML += `
    <li class="${checkLine}">
    <input id="${task.id}" class="js-check" type="checkbox">
    ${task.name}
    </li>`
}

const inputsCheck = document.querySelectorAll ('.js-check');
for (const inputCheck of inputsCheck){
const handleCheck = ()=> 

inputCheck.addEventListener('check', handleCheck)
  //si check --> add clase .line
  //si no check --> remove clase .line
}

/*
ACCIONES AL MARCAR UNA TAREA COMO COMPLETADA:
  - La tarea debe mostrarse como completada(tachada)
  - El estado de la tarea se actualizará: la propiedad -completed- de la tarea se cambiará en nuestro array de tareas

. Añadir clase al input
. querySelectorAll
. bucle que recorra todo el array inputsCheck - y dentro, hacemos el evento click sobre el inputCheck
*/