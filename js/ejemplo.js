// pintar  lista de tareas
const renderTasks = (array) => {
    listUl.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
      //cada tarea --> task[i] ->  { name: 'x', completed: x, id: x },
      listUl.innerHTML += `
       <li class= "${array[i].completed ? 'line' : null}">
          <input type="checkbox"  
          ${array[i].completed ? 'checked' : null}
          class="js-checkbox" id="${array[i].id}"/>
          ${array[i].name}
      </li>
      `;
    }
  
    listenCheckbox();
  };
  renderTasks(tasks);




const nuevorenderTasks = (array) =>{
    listUl.innerHTML='';
    for (let i = 0; i < array.length; i++) {

        const liElement = document.createElement('li');
        listUl.appendChild(liElement);
        liElement.setAttribute('class', `${array[i].completed ? 'line' : null}`);
        const liElementText = document.createTextNode(`${array[i].name}`);
        liElement.appendChild(liElementText);

        const setInput = document.createElement('input');
        liElement.appendChild(setInput);
        setInput.setAttribute('type', 'checkbox');
        setInput.setAttribute('class', 'js-checkbox');
        setInput.setAttribute('id', `${array[i].id}`);
        // const setInputText = document.createTextNode(`${array[i].completed ? 'checked' : null}`);
        // setInput.appendChild(setInputText);
        if(array[i].completed){
            setInput.checked=true
        }
    }
    listenCheckbox();
};
renderTasks(tasks);
   
