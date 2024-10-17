import { saveLocalStorage } from "./Localstorage";

export const Checkbox = (id, todoList, setTodoList) => {
  const checktTodo = todoList.map((x) => {
    x.id === id ? {...x, checked: !x.checked} : x
  });
  setTodoList(checktTodo);
  saveLocalStorage("todo", checktTodo);
};
