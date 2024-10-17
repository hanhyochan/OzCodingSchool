import React, { useState, useEffect, useRef } from "react";
import { DeleteTodoList } from "../module/DeleteTodoList";
import { HandleEdit, HandleEditChange } from "../module/HandleEdit";
import { Checkbox } from "../module/Checkbox";

const Todo = ({ todoList, setTodoList }) => {
  const [todoView, setTodoView] = useState(null);

  const ViewTemplate = ({ x }) => {
    return (
      <>
        <input
          type="checkbox"
          checked={x.checked}
          onChange={() => Checkbox(x.id, todoList, setTodoList)}
        />
        <div className="todoContainer_1">
          {x.content}
          <div className="todoContainer_2">
            <button
              className="deleteBtn btn"
              onClick={() => DeleteTodoList(x.id, todoList, setTodoList)}
            >
              삭제
            </button>
            <button className="editBtn btn" onClick={() => setTodoView(x.id)}>
              수정
            </button>
          </div>
        </div>
      </>
    );
  };

  const EditTemplate = ({ x }) => {
    const [edited, setEdited] = useState("");
    
    return (
      <>
        <input
          className="editInput"
          type="text"
          value={edited[x.id] || x.content}
          onChange={(e) =>
            HandleEditChange(x.id, e.target.value, edited, setEdited)
          }
        />
        <div>
          <button
            className="saveBtn btn"
            onClick={() =>
              HandleEdit(x.id, todoList, setTodoList, edited, setTodoView)
            }
          >
            저장
          </button>
          <button className="backBtn btn" onClick={() => setTodoView(null)}>
            취소
          </button>
        </div>
      </>
    );
  };
  return (
    <>
      <ul>
        {todoList.map((x) => {
          return (
            <li className="todo" key={x.id}>
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
