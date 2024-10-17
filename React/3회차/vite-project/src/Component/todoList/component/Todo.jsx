import React, { useState } from "react";
import { DeleteTodoList } from "../module/DeleteTodoList";
import { HandleEdit, HandleEditChange } from "../module/HandleEdit";
import { Checkbox } from "../module/Checkbox";

const Todo = ({ todoList, setTodoList }) => {
  const [todoView, setTodoView] = useState(null);
  const [edited, setEdited] = useState("");

  const ViewTemplate = ({ x }) => {
    return (
      <>
        <input
          type="checkbox"
          checked={x.checked}
          onChange={() => Checkbox(x.id, todoList, setTodoList)}
        />
        {x.content}
        <button onClick={() => DeleteTodoList(x.id, todoList, setTodoList)}>
          삭제
        </button>
        <button onClick={() => setTodoView(x.id)}>수정</button>
      </>
    );
  };

  const EditTemplate = ({ x }) => {
    console.log(x);
    return (
      <>
        <input
          type="text"
          value={edited[x.id] || x.content}
          onChange={(e) =>
            HandleEditChange(x.id, e.target.value, edited, setEdited)
          }
        />
        <button
          onClick={() =>
            HandleEdit(x.id, todoList, setTodoList, edited, setTodoView)
          }
        >
          저장
        </button>
        <button onClick={() => setTodoView(null)}>취소</button>
      </>
    );
  };

  return (
    <>
      <ul>
        {todoList.map((x) => {
          return (
            <li key={x.id}>
              {todoView !== x.id ? (
                <ViewTemplate x={x} />
              ) : (
                <EditTemplate x={x} />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
