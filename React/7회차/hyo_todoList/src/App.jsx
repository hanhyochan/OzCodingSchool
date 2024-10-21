import { useState, useEffect, useRef } from "react";
import { saveLocalStorage } from "./module/saveLocalStorage";
import { getLocalStorage } from "./module/getLocalStorage";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(getLocalStorage("todo") || []);

  useEffect(() => {
    saveLocalStorage("todo", todo);
  }, [todo]);

  const handleDeleteTodo = (id) => {
    const deltedTodo = todo.filter((el) => el.id !== id);
    setTodo(deltedTodo);
  };

  const handleCheckTodo = (id) => {
    const checkTodo = todo.map((el) =>
      el.id === id ? { ...el, checked: !el.checked } : el
    );
    setTodo(checkTodo);
  };

  const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      setInterval(() => {
        setTime(new Date());
      }, 1000);
    }, []);

    return <div>{time.toLocaleTimeString()}</div>;
  };

  const formatTime = (seconds) => {
    const timeString = `${String(Math.floor(seconds / 3600)).padStart(
      2,
      "0"
    )}:${String(Math.floor((seconds % 60) / 60)).padStart(2, "0")}:${String(
      seconds % 60
    ).padStart(2, "0")}`;
    return timeString;
  };

  const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [isOn, setIsOn] = useState(false);

    const timerRef = useRef(null);

    useEffect(() => {
      if (isOn === true) {
        const timerId = setInterval(() => {
          setTime((prev) => prev + 1);
        }, 1000);
        timerRef.current = timerId;
      } else {
        clearInterval(timerRef.current);
      }
    }, [isOn]);

    return (
      <div>
        {formatTime(time)}
        <button onClick={() => setIsOn((prev) => !prev)}>
          {isOn ? "끄기" : "켜기"}
        </button>
        <button>리셋</button>
      </div>
    );
  };

  return (
    <div className="container">
      <Clock />
      <StopWatch />
      <TodoInput todo={todo} setTodo={setTodo} />
      <TodoList
        todo={todo}
        handleCheckTodo={handleCheckTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
