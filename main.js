const addForm = document.getElementById("myForm");

const taskList = document.querySelector(".task_list");
const listItem = document.querySelector(".listItem");

// // buttons
// const check = document.createElement("span");
// check.classList.add("done");
// check.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check done"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

// const trash = document.createElement("span");
// trash.classList.add("delete");
// trash.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 delete"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`;

// // buttons div
// const options = document.createElement("div");
// options.classList.add("option");
// options.innerHTML = `${check.innerHTML} ${trash.innerHTML}`;

// console.log(options);
// // add task
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // task div
//   const task = document.createElement("div");
//   task.classList.add("listItem");
//   task.innerHTML = `
//   <p class="task_active">${form.new_task.value}</p> ${options.outerHTML}`;

//   // add to list and clear input
//   taskList.prepend(task);
//   form.new_task.value = "";

//   // button actions
//   const doneBtns = Array.from(document.getElementsByClassName("done"));
//   const dltBtns = Array.from(document.getElementsByClassName("delete"));

//   doneBtns.forEach((doneBtn) => {
//     doneBtn.addEventListener("click", (event) => {
//       parent = event.target.parentElement.parentElement;
//       task_element = parent.firstChild.nextElementSibling;
//       event.target.classList.add("hidden");

//       task_element.classList.add("task_finished");
//     });
//   });

//   dltBtns.forEach((dltBtns) => {
//     dltBtns.addEventListener("click", (event) => {
//       parent = event.target.parentElement.parentElement;
//       parent.remove();
//       console.log(parent);
//     });
//   });
// });

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

  // taskList.addEventListener("click", (e) => {
  //   // if (e.target.classList.contains("delete")) {
  //   //   console.log(e.target.parentElement.parentElement);
  //   // }
  //   console.log(e.target);
  // });
});

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    e.target.parentElement.parentElement.firstElementChild.className =
      "task_finished";
  }
});
