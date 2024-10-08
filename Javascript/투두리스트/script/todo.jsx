//todo
const todo_form = document.querySelector("#todo_form");
const todo_input = document.querySelector("#todo_input");
const todo_btn = document.querySelector("#todo_btn");
const todo_box = document.querySelector(".todo_box");
todo_box.classList.add("todo_box");

let todo_Info_Array = [];

function load_todo() {
  const todos = localStorage.getItem("todos" || []);
  todo_Info_Array = JSON.parse(todos);
  todo_display();
}
load_todo();

// todo display
function todo_display() {
  todo_box.innerHTML = "";
  todo_input.value = "";
  todo_Info_Array.forEach((x) => {
    const todo_item = document.createElement("li");
    todo_item.classList.add("todo_item");

    todo_item.addEventListener("click", () => {
      todo_check(x.id);
    });
    if (x.check === true) {
      todo_item.classList.add("todo_item_done");
    }

    const todo_item_btn = document.createElement("div");
    todo_item_btn.classList.add("todo_item_btn");

    const delete_btn = document.createElement("button");
    delete_btn.innerHTML = `❌`;
    delete_btn.classList.add("btn");
    delete_btn.addEventListener("click", () => {
      delete_todo(x.id);
    });

    todo_item.innerHTML = `${x.content}`;
    todo_box.appendChild(todo_item);

    todo_item_btn.appendChild(delete_btn);
    todo_item.append(todo_item_btn);
  });
}

todo_form.addEventListener("submit", function (x) {
  x.preventDefault();
  const todo_Info = {
    id: crypto.randomUUID(),
    content: todo_input.value,
    check: false,
  };
  todo_Info_Array.push(todo_Info);
  todo_display();
  save_todo();
});

// delete
function delete_todo(id) {
  const new_todo_Info_Array = todo_Info_Array.filter((x) => x.id !== id);
  todo_Info_Array = new_todo_Info_Array;
  save_todo();
  todo_display();
}

//check
function todo_check(id) {
  todo_Info_Array = todo_Info_Array.map((x) => {
    if (x.id === id) {
      return {
        ...x,
        check: !x.check,
      };
    }
    return x;
  });
  save_todo();
  todo_display();
}

function save_todo() {
  localStorage.setItem("todos", JSON.stringify(todo_Info_Array));
}
