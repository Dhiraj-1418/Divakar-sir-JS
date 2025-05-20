let task = document.getElementById("task");
let priority = document.getElementById("priority");
let form = document.getElementById("form");
let tableBody = document.querySelector("tbody");

let todoData = JSON.parse(localStorage.getItem("Todo")) || [];

function TodoTask() {
  tableBody.innerHTML = "";

  todoData.forEach((el, i) => {
    let tr = document.createElement("tr");

    let tdTask = document.createElement("td");
    let tdPriority = document.createElement("td");

    let tdDelete = document.createElement("button");
    tdDelete.innerHTML = "Delete";
    tdDelete.addEventListener("click", () => {
      todoData.splice(i, 1);
      localStorage.setItem("Todo", JSON.stringify(todoData));
      TodoTask();
    });

    tdTask.textContent = el.taskname;
    tdPriority.textContent = el.priorityName;

    tr.appendChild(tdTask);
    tr.appendChild(tdPriority);
    tr.appendChild(tdDelete);

    tableBody.appendChild(tr);
  });
}

TodoTask();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskValue = task.value;
  const priorityValue = priority.value;

  // console.log(taskValue);
  // console.log(priorityValue);

  const obj = {
    taskname: taskValue,
    priorityName: priorityValue,
  };
  // console.log(obj);

  todoData.push(obj);
  console.log(todoData);
  localStorage.setItem("Todo", JSON.stringify(todoData));

  task.value = "";
  priority.value = "";

  TodoTask();
});
