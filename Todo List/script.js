const todoInput = document.querySelector("#todo-list-input");
const addBtn = document.querySelector('#addbtn');
const todoList = document.querySelector('#todo-list');

let tasks=[];
const storedTasks=localStorage.getItem("tasks");

if(storedTasks){
    tasks=JSON.parse(storedTasks);
}
renderTasks();

todoInput.addEventListener("keydown",()=>{
    if(event.key === "Enter")
    {
        addBtn.click();
    }
});

addBtn.addEventListener("click",()=>{
    if(todoInput.value.trim() === "")
    {
        alert("Please enter a task");
        return;
    }

    const task={
        id:Date.now(),
        text:todoInput.value,
        completed:false
    };

    tasks.push(task);
    saveTasks();
    renderTasks();
    todoInput.value="";
});

function renderTasks()
{
    todoList.innerHTML="";

    tasks.forEach(task=>{
        const li=document.createElement("li");
        const delbtn=document.createElement("button");
        const completebtn=document.createElement("button");

        completebtn.textContent="Completed";
        delbtn.textContent="Delete";
        li.textContent=task.text;

        completebtn.addEventListener("click",()=>{
            task.completed=!task.completed;
            saveTasks();
            renderTasks();
        });
        delbtn.addEventListener("click",()=>{
            tasks=tasks.filter(t=>t.id !== task.id);
            saveTasks();
            renderTasks();
        });

        li.appendChild(completebtn);
        li.appendChild(delbtn);
        todoList.appendChild(li);

        if(task.completed){
            li.style.textDecoration="line-through";
        }
    });
}

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

