import React, { useState } from "react";
import { saveLocalStorage, getLocalStorage } from "./module/localstorage";
import Todo from "./page/todo";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(getLocalStorage("todo") || []);

  saveLocalStorage("todo", todoList);

  const HandleSubmit = () => {
    const todoInfo = {
      id: Number(new Date()),
      content: todo,
    };
    setTodoList([...todoList, todoInfo]);
    setTodo("");
  };

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={HandleSubmit}>제출</button>

      <Todo todoList={todoList} setTodoList={setTodoList}/>
    </>
  );
};

export default Home;
