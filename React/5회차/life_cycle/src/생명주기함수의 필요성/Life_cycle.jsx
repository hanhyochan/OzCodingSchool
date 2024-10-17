import React, { useState, useEffect } from "react";

const Life_cycle = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <div>데이터 목록</div>
      {data.map((el) => (
        <div key={el.id}>{el.content}</div>
      ))}
    </>
  );
};

export default Life_cycle;
