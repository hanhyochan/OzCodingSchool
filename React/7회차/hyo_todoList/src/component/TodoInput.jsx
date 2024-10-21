import { useRef } from "react";

const TodoInput = ({ setTodo }) => {
  const inputRef = useRef(null);

  const addTodo = () => {
    const newTodo = {
      id: Number(new Date()),
      content: inputRef.current.value,
      checked: false,
    };
    setTodo((prev) => [...prev, newTodo]);
  };

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
