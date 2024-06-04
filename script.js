// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
// Variable that will get current timestamp.
    const timestamp = Date.now();
// Variable that will generate random number between 0 and 999.
    const randomNum = Math.floor(Math.random() * 1000);
// Variable that will combine Timestamp and Random Number Variables.
    const taskId = `TASK-${timestamp}-${randomNum}`;
    return taskId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
// Created the main Task Card element with a variable.
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
// Create an element for the Task.
    const taskElement = document.createElement('p');
    taskElement.textContent = task;
// Append the task to the Task Card.
    taskCard.appendChild(taskElement);
// Append taskCard to taskBoard.
    const taskBoard = document.getElementById('task-board');
    taskBoard.appendChild(taskCard);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
// Defined variable as taskList.
    const taskList = document.getElementById('task-list');
// Defined another variable as taskTemplate.
    const taskTemplate = document.getElementById('task-template');
    task.forEach(task => {
        const clone = document.importNode(taskTemplate.content, true);
        clone.querySelector('.task-title').textContent = task.title;
        clone.querySelector('.task-description').textContent = task.description;
        taskList.appendChild(clone);
// Make the Task Card draggable by the user.
        makeDraggable(clone.querySelector('.task-card'));
    });
}

// Creating the makeDraggable Function.
function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;

    element.addEventListener('mousedown', e => {
        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', e => {
        if (isDragging) {
            element.style.left = e.clientX - offsetX + 'px';
            element.style.top = e.clientY - offsetY + 'px';
        }
    });
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
