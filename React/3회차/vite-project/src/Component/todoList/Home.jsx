import React, { useState, useEffect } from "react";
import { saveLocalStorage, getLocalStorage } from "./module/Localstorage";
import Todo from "./component/todo";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(getLocalStorage("todo") || []);

  const HandleSubmit = () => {
    const todoInfo = {
      id: Number(new Date()),
      content: todo,
    };
    setTodoList((prev) => {
      const updatedList = [...prev, todoInfo];
      saveLocalStorage("todo", updatedList);
      return updatedList;
    });
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
      <Todo todoList={todoList} setTodoList={setTodoList} />
    </>
  );
};

export default Home;
