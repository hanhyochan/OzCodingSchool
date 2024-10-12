import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [edited, setEdited] = useState("");

  const HandleSubmit = () => {
    const todoInfo = {
      id: Number(new Date()),
      content: todo,
    };
    setTodoList([...todoList, todoInfo]);
    setTodo("");
  };

  const deleteTodoList = (id) => {
    const deletTodo = todoList.filter((x) => {
      return x.id !== id;
    });
    setTodoList(deletTodo);
  };

  const handleEdit = (id) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, content: edited[id] } : todo
    );
    setTodoList(updatedTodoList);
  };

  const handleEditChange = (id, value) => {
    setEdited({ ...edited, [id]: value });
  };

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={HandleSubmit}>제출</button>
      <ul>
        {todoList.map((x) => {
          return (
            <li key={x.id}>
              {x.content}
              <button onClick={() => deleteTodoList(x.id)}>삭제</button>
              <input
                type="text"
                value={edited.id}
                onChange={(e) => handleEditChange(x.id, e.target.value)}
              />
              <button onClick={() => handleEdit(x.id)}>저장</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
