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

for (let i = 0; i<tasks.lenght; i++){
    checkboxList.innerHTML += `
    <li>
        <input id="1" type="checkbox">
        ${tasks[i].name}
        </li>`
}