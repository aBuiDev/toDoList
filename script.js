const taskInputButton = document.querySelector('.taskInputButton');
const mainSectionContainer = document.querySelector('.mainSectionContainer');



// Preload Mechanism
const preLoad = function () {

    for (let i = 0; i < localStorage.length; i++) {
        const taskOutput = document.createElement('div');
        taskOutput.classList.add('taskOutput');
        const taskNotesOutput = document.createElement('p');
        taskNotesOutput.classList.add('taskNotesOutput');
        const taskOutputControls = document.createElement('button');
        taskOutputControls.classList.add('taskOutputControls');
        taskOutputControls.classList.add('far');
        taskOutputControls.classList.add('fa-check-circle');
        taskNotesOutput.textContent = localStorage.key(i);
        taskOutput.classList.add('taskOutput');
        taskOutput.appendChild(taskNotesOutput);
        mainSectionContainer.appendChild(taskOutput).appendChild(taskOutputControls);
    }
}

// Preload Mechanism Call
preLoad();



// Create Task Output Mechanisim
const createTask = function (event) {
    event.preventDefault();

    if (taskInput.value === '') {
        console.log("Cannot Create Empty Task");
    } else {
        // Task Output Container
        const taskOutput = document.createElement('div');
        taskOutput.classList.add('taskOutput');
        const taskNotesOutput = document.createElement('p');
        taskNotesOutput.classList.add('taskNotesOutput');
        const taskOutputControls = document.createElement('button');
        taskOutputControls.classList.add('taskOutputControls');
        taskOutputControls.classList.add('far');
        taskOutputControls.classList.add('fa-check-circle');

        localStorage.setItem(taskInput.value, "note");

        taskNotesOutput.textContent = taskInput.value;
        
        taskOutput.appendChild(taskNotesOutput);
        mainSectionContainer.appendChild(taskOutput).appendChild(taskOutputControls);
    }
}

// Create Task Event Listener
taskInputButton.addEventListener('click', createTask);



// Remove Task
mainSectionContainer.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target.previousSibling);
    if (event.target.matches('button')) {
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).toString() === event.target.previousSibling.textContent) {
                localStorage.removeItem(localStorage.key(i));
            }
        }
        event.target.parentElement.remove();
    }
});
