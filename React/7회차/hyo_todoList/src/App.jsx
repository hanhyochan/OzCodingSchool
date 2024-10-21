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

  const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setIsLoading(false);
        });
    }, [url]);
    return [isLoading, data];
  };

  const Advice = () => {
    const [isLoading, data] = useFetch(
      "https://korean-advice-open-api.vercel.app/api/advice"
    );

    return (
      <>
        {!isLoading && (
          <>
            <div>{data.message}</div>
            <div>-{data.author}-</div>
          </>
        )}
      </>
    );
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
    )}:${String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")}:${String(
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
        <button
          onClick={() => {
            setTime(0);
            setIsOn(false);
          }}
        >
          리셋
        </button>
      </div>
    );
  };

  const Timer = () => {
    const [startTime, setStartTime] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [time, setTime] = useState(0);
    const timerRef = useRef;

    useEffect(
      () => {
        if (isOn && time > 0) {
          const timerId = setInterval(() => {
            setTime((prev) => prev - 1);
          }, 1000);
          timerRef.current = timerId;
        } else if (!isOn || time == 0) {
          clearInterval(timerRef.current);
        }

        return () => clearInterval(timerRef.current);
      },
      [isOn],
      time
    );

    return (
      <div>
        <div>
          {time ? formatTime(time) : formatTime(startTime)}
          <button
            onClick={() => {
              setIsOn(true);
              setTime(startTime);
              setStartTime(startTime);
            }}
          >
            시작
          </button>
          <button
            onClick={() => {
              setTime(0);
              setIsOn(false);
            }}
          >
            리셋
          </button>
          <button onClick={() => setIsOn(false)}>멈춤</button>
        </div>
        <input
          type="range"
          value={startTime}
          min="0"
          max="3600"
          step="30"
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
    );
  };

  return (
    <div className="container">
      <Advice />
      <Timer />
      {/* <Clock />
      <StopWatch /> */}
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
