document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoinput");
  const addTodo = document.querySelector(".addTodo");
  const todoContent = document.querySelector(".todocontent-container");

  addTodo.addEventListener("click", addTodoTitle);

  function addTodoTitle() {
    const pop = document.querySelector(".pop-content");
    const query = todoInput.value.trim();
    if (query) {
      const boxContent = createTodoItem(query);
      todoContent.appendChild(boxContent);
      todoInput.value = ''; // Clear the input field after adding a todo
    }
  }

  function createTodoItem(title) {
    const boxContent = document.createElement("div");
    const innerContent = document.createElement("div");
    const inputCheck = document.createElement("input");
    const titleTag = document.createElement("h5");
    const deleteBtn = document.createElement("button");

    boxContent.classList.add("content-box");
    innerContent.classList.add("inner-content");
    inputCheck.type = "checkbox";
    titleTag.textContent = title;
    deleteBtn.textContent = "x";

    boxContent.appendChild(titleTag);
    boxContent.appendChild(innerContent);
    innerContent.appendChild(inputCheck);
    innerContent.appendChild(deleteBtn);

    inputCheck.addEventListener("change", () => {
      titleTag.classList.toggle("toggle");
    });

    deleteBtn.addEventListener("click", () => {
      todoContent.removeChild(boxContent);
    });

    return boxContent;
  }



  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodoTitle();
    }
  });
});
