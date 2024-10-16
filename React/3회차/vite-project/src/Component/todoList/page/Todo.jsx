import React, { useState } from "react";
import { saveLocalStorage} from "./module/localstorage";

const Todo = ({ todoList }, setTodoList) => {
  const [todoView, setTodoView] = useState(null);
  const [edited, setEdited] = useState("");

  saveLocalStorage("todo", todoList);

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
    setTodoView(null);
  };

  const handleEditChange = (id, value) => {
    setEdited({ ...edited, [id]: value });
  };

  return (
    <>
      <ul>
        {todoList.map((x) => {
          return (
            <li key={x.id}>
              {todoView !== x.id ? (
                <>
                  {x.content}
                  <button onClick={() => deleteTodoList(x.id)}>삭제</button>
                  <button onClick={() => setTodoView(x.id)}>수정</button>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    value={edited[x.id] || x.content}
                    onChange={(e) => handleEditChange(x.id, e.target.value)}
                  />
                  <button onClick={() => handleEdit(x.id)}>저장</button>
                  <button onClick={() => setTodoView(null)}>취소</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
