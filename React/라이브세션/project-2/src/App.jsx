import { useState } from "react";
import "./App.css";

function App() {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  // const [isMarrid, setIsMarrid] = useState(false);

  const [data, setData] = useState({
    name: "gkdl",
    age: 0,
    isMarrid: false,
  });

  return (
    <>
      <p>이름</p>
      <div>{data.name}</div>
      <p>나이</p>
      <div>{data.age}</div>
      {data.isMarrid ? <div>비혼</div> : <div>미혼</div>}
    </>
  );
}

export default App;
