let task = document.getElementById("task");
let priority = document.getElementById("priority");
let form = document.getElementById("form");
let tableBody = document.querySelector("tbody");
 

form.addEventListener('submit',(event)=> {
    event.preventDefault();
    taskAddCall();
});

function taskAddCall(){

    let tr = document.createElement("tr");
    let addTask = document.createElement("td");
    let addPriority = document.createElement("td");
    let deleteTask = document.createElement("button");
    
    let taskValue = task.value;
    let priorityValue = priority.value;
    deleteTask.innerHTML = "Delete";
    addTask.append(taskValue);
    addPriority.append(priorityValue);

    tr.appendChild(addTask);
    tr.appendChild(addPriority);
    tr.appendChild(deleteTask);

    tableBody.append(tr);

    deleteTask.addEventListener("click" , ()=> {
        tr.remove();
    });


};


 