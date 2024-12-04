document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function createTask(taskText) {
        const li = document.createElement('li');


        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');

        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.classList.add('save-btn');
        saveBtn.style.display = 'none'; 

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        
        editBtn.addEventListener('click', () => {
            taskInput.value = taskSpan.textContent;
            taskInput.focus();
            taskSpan.style.display = 'none';
            editBtn.style.display = 'none';
            saveBtn.style.display = 'inline';
        });

        
        saveBtn.addEventListener('click', () => {
            taskSpan.textContent = taskInput.value;
            taskSpan.style.display = 'inline';
            editBtn.style.display = 'inline';
            saveBtn.style.display = 'none';
            taskInput.value = '';
        });

    
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        
        const actionsContainer = document.createElement('div');
        actionsContainer.classList.add('task-actions');
        actionsContainer.append(editBtn, saveBtn, deleteBtn);

        li.appendChild(taskSpan);
        li.appendChild(actionsContainer);


        taskList.prepend(li);
    }

    
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            createTask(taskText);
            taskInput.value = '';
        }
    });

    
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});