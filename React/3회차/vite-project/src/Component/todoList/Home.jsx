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
      checked: false,
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
      <div className="container">
        <h2>📖 투두리스트 📖</h2>
        <div className="submitContainer">
          <input
            className="submitInput"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="submitBtn" onClick={HandleSubmit}>제출</button>
        </div>
        <Todo todoList={todoList} setTodoList={setTodoList} />
      </div>
    </>
  );
};

export default Home;
