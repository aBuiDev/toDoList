const taskInputButton = document.querySelector('.taskInputButton');
const mainSectionContainer = document.querySelector('.mainSectionContainer');

let i = 0;

taskInputButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(taskInput.value);

    i += 1;

    // Task Output Container
    const taskOutput = document.createElement('div');
    taskOutput.textContent = i;
    taskOutput.classList.add('taskOutput');

    const taskOutputControls = document.createElement('button');
    taskOutputControls.textContent = "Close Task"

    mainSectionContainer.appendChild(taskOutput).appendChild(taskOutputControls);

});

mainSectionContainer.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.matches('button')) {
        event.target.parentElement.remove();
    }
});
