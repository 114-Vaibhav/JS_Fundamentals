let tasks = [];

let taskInput = document.getElementById('taskInput');
let addTaskButton = document.getElementById('addTaskBtn');
let taskList = document.getElementById('taskList');
addTaskButton.addEventListener('click', addTask);


function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push({ taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.className = "flex items-center justify-between p-3 mb-2 w-72 bg-gray-100 rounded border border-gray-300";

        let span = document.createElement('span');
        span.textContent = task.taskText;
        span.className = task.completed ? 'line-through text-gray-400' : 'text-gray-800';

        let btnDiv = document.createElement('div');
        btnDiv.className = "flex space-x-3";

        let readBtn = document.createElement('button');
        readBtn.innerHTML = task.completed ? '🔄' : '✅';
        readBtn.className = "bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded";
        readBtn.title = task.completed ? 'Mark as unread' : 'Mark as done';
        readBtn.addEventListener('click', () => {
            task.completed = !task.completed;
            renderTasks();
        });

        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '❌';
        deleteBtn.className = "bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded";
        deleteBtn.title = 'Delete task';
        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        btnDiv.appendChild(readBtn);
        btnDiv.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(btnDiv);
        console.log(li);
        taskList.appendChild(li);
    });
}

