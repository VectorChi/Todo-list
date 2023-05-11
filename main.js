const addForm = document.getElementById("myForm");

const taskList = document.querySelector(".task_list");
const listItem = document.querySelector(".listItem");

// generate template
generateTemplate = (todo) => {
  const listContainer = `<div class="listItem">
          <p class="task_active">${todo}</p>
          <div class="option">
            <i data-feather="check" class="done"></i>
            <i data-feather="trash-2" class="delete"></i>
          </div>
        </div>`;

  taskList.innerHTML += listContainer;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.task.value.trim();

  if (todo.length > 0) {
    generateTemplate(todo);
    feather.replace();
    addForm.reset();
  }
});

// delete task
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});

// add task
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    e.target.parentElement.parentElement.firstElementChild.className =
      "task_finished";
  }
});
