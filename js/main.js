'use strict';
const checkboxList = document.querySelector('.js-list');

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

for (const task of tasks) {
  let checkLine = '';
    if (task.completed === true){
    checkLine = 'line';
    }
  checkboxList.innerHTML += `
    <li class="${checkLine}">
    <input id="${task.id}" class="check" type="checkbox">
    ${task.name}
    </li>`
}

/*
ACCIONES AL MARCAR UNA TAREA COMO COMPLETADA:
  - La tarea debe mostrarse como completada(tachada)
  - El estado de la tarea se actualizará: la propiedad -completed- de la tarea se cambiará en nuestro array de tareas

. Añadir clase al input?
. querySelectorAll?
. Evento click sobre el checkbox

*/