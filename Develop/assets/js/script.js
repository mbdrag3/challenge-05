/*
To do 
1. create click event that pulls up task input questions
*/

// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const descriptions = [];
const taskButton = $('#buttonAdd');
const displayForm = $('#formId');
const cancelForm = $('#cancel');
const submitTask = $('#submitTask');

taskButton.on('click', function () {
    displayForm.show();
})

cancelForm.on('click', function () {
    displayForm.hide();
})

submitTask.on('click', function(event) {
    event.preventDefault();
    const title = document.getElementById("taskTitle");
    const taskTitleVal = title.value.trim();
    console.log(taskTitleVal);
    const description = document.getElementById("taskDescription");
    const taskDescription = description.value.trim();
    console.log(taskDescription);
    const date = document.getElementById("dueDate");
    const taskDueDate = date.value;
    console.log(taskDueDate);

    if(taskTitleVal !== "" && taskDescription !== "" && date !== ""){
        const newTask = {
            taskTitleVal,
            taskDescription,
            taskDueDate,
            completed: false
        };
        tasks.push(newTask);
        saveTasks();
        title.value = "";
        description.value = "";
        date.value = "";
    }

    createTaskCard();


   /*if(taskDescription !== ""){
        const newTaskDescription = {
            taskDescription,
            completed: false
        };
        tasks.push(newTaskDescription);
        saveTasks();
        description.value = "";
    }*/
})

function saveTasks(){
    localStorage.setItem("Task",JSON.stringify(tasks));
}



// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card

function createTaskCard() {
    const taskDiv = document.getElementById("todo-cards");
    taskDiv.innerHTML = "";
    tasks.forEach((task, index)=> {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");
        
        //taskCard.classList.add();

        const taskTitleText = document .createElement("p");
        taskTitleText.innerText = JSON.stringify(tasks);

        taskCard.appendChild(taskTitleText)
        
        taskDiv.appendChild(taskCard);
    });
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
