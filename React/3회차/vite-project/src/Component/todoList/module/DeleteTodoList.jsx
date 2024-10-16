import { saveLocalStorage } from "./Localstorage";

export const DeleteTodoList = (id, todoList, setTodoList) => {
    const deletTodo = todoList.filter((x) => {
      return x.id !== id;
    });
    setTodoList(deletTodo);
    saveLocalStorage("todo", deletTodo);
  };