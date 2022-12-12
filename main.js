const main = document.querySelector('main');
const taskList = document.querySelector('#list');
const taskInput = document.querySelector('#user');
const task = document.querySelector('ul');
let tasks = [];

taskList.addEventListener('submit', function(event) {
    console.log("Submitting the form");
    event.preventDefault();

    const list = taskInput.value;

    let object = {
        "task": list,
        "done": false
    }

    if (tasks.length < 100) {
        tasks.push(object);
    }

    taskInput.value = '';
    renderTaskList();
})
   
const renderTaskList = () => {
    const template = tasks.map((item, index) =>
        `
        <li class="${item.done ? 'done' : ''}">
        <p class="items">${item.task}</p>
        <button class="done" data-index="${index}">Done</button>
        <button class="delete" data-index="${index}">Delete</button>
        </li>
        `
    ).join('');
    task.innerHTML = template;
}

task.addEventListener('click', function(event) {
    if (event.target.matches('.done')) {
        const index = event.target.dataset.index;
        tasks[index].done = !tasks[index].done;
        renderTaskList();
    }
})

task.addEventListener('click', function(event) {
    if (event.target.matches('.delete')) {
        const index = event.target.dataset.index;
        tasks.splice(index, 1);
        renderTaskList();
    }
})