import React from "react";
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
//   let varCount =

const handleStateCount = () => {
    
}
  return (
    <>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      </div>
    </>
  );
};

export default Count;
