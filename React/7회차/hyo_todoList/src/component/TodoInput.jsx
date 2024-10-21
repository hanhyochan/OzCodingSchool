import { useRef } from "react";

const TodoInput = ({ setTodo }) => {
  const inputRef = useRef(null);

  const addTodo = () => {
    const newTodo = {
      // id: Number(new Date()),
      content: inputRef.current.value,
      checked: false,
    };
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify(newTodo)
    }).then((res) => res.json())
    .then((res) => setTodo((prev) => [...prev, res]))
    }

  return (
    <>
      <div className="submitContainer">
        <input className="submitInput" ref={inputRef} />
        <button className="submitBtn" onClick={addTodo}>
          제출
        </button>
      </div>
    </>
  );
};

export default TodoInput;
