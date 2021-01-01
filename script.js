const taskInputButton = document.querySelector('.taskInputButton');
const mainSectionContainer = document.querySelector('.mainSectionContainer');

// Preload Mechanism
const preLoad = function () {

    for (let i = 0; i < localStorage.length; i++) {
        const taskOutput = document.createElement('div');
        const taskNotesOutput = document.createElement('p');
        taskNotesOutput.textContent = localStorage.key(i);
        taskOutput.classList.add('taskOutput');
        taskOutput.appendChild(taskNotesOutput);
        const taskOutputControls = document.createElement('button');
        taskOutputControls.textContent = "Close Task"
        mainSectionContainer.appendChild(taskOutput).appendChild(taskOutputControls);
    }
}

// Preload Mechanism Call
preLoad();



// Create Task Output Mechanisim
const createTask = function (event) {
    event.preventDefault();

    // Task Output Container
    const taskOutput = document.createElement('div');
    const taskNotesOutput = document.createElement('p');
    
    localStorage.setItem(taskInput.value, "note");

    taskNotesOutput.textContent = taskInput.value;

    taskOutput.classList.add('taskOutput');
    taskOutput.appendChild(taskNotesOutput);

    const taskOutputControls = document.createElement('button');
    taskOutputControls.textContent = "Close Task"

    mainSectionContainer.appendChild(taskOutput).appendChild(taskOutputControls);
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
