let form = document.getElementById("myForm");
const del = document.querySelector(".delete");
const done = document.querySelector(".done");
const taskList = document.querySelector(".task_list");
const listItem = document.querySelector(".listItem");
const options = document.querySelector(".option");
console.log(options);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = document.createElement("div");
  task.classList.add("listItem");
  task.innerHTML = `
  <p class="task_active">${form.new_task.value}</p> ${options.outerHTML} `;

  taskList.prepend(task);
  form.new_task.value = "";
});
