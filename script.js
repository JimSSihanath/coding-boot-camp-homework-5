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
    const taskElement = document.createElement('p');
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

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
