document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const addTaskBtn = document.getElementById("add-task");

addTaskBtn.addEventListener("click", () => {
  if (taskInput.value.trim()) {
    const li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";

    li.addEventListener("click", () => {
      li.remove();
    });
  }
});
