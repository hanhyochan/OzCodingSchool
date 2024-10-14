import React, { useState } from "react";
import Child from "./Child";

const Parents = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isMarrid, setIsMarrid] = useState(false);

  //   const [listData, setListData] = useState([
  //     {
  //       name: "김히히",
  //       age: 56,
  //       isMarrid: true,
  //     },
  //     {
  //       name: "박까까",
  //       age: 23,
  //       isMarrid: false,
  //     },
  //   ]);

  const [form, setForm] = useState({
    name: "",
    age: 0,
    isMarrid: false,
  });

  const handleAdd = () => {
    setForm({
      name: name,
      age: age,
      isMarrid: isMarrid,
    });
  };

  return (
    <div style={{ border: `1px solid green`, padding: `10px` }}>
      {/* {
        listData.map((item) => (
            <Child name={item.name} age={item.age} isMarrid={item.isMarrid}/>
        ))
      } */}
      <p>이름</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>나이</p>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p>결혼 유무</p>
      <input
        type="checkbox"
        checked={isMarrid}
        onChange={(e) => setIsMarrid(e.target.checked)}
      />
      <button onClick={handleAdd}>추가</button>
      <Child name={form.name} age={form.age} isMarrid={form.isMarrid} />
    </div>
  );
};

export default Parents;
