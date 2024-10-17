import { saveLocalStorage } from "../module/Localstorage";

export const HandleEditChange = (id, value, edited, setEdited) => { 
  setEdited({ ...edited, [id]: value });
  };

export const HandleEdit = (id ,todoList, setTodoList, edited, setTodoView) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, content: edited[id] } : todo
    );
    setTodoList(updatedTodoList);
    saveLocalStorage("todo", updatedTodoList);
    setTodoView(null);
  };