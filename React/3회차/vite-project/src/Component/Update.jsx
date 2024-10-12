import React, { useState } from "react";

function Update() {
  //   const [number, setNumber] = useState(1);
  //   const handler = () => {
  //     setNumber(number + 1)
  //   }
  //   return (
  //     <>
  //       number : {number}
  //       <br />
  //       <button onClick={handler}>상태 업데이트!</button>
  //     </>
  //   );

  let [array, setArray] = useState([1, 2, 3]);
  const handler = () => {
    // const newArray = array.slice()
    const newArray = [...array];
    newArray.push(5);
    setArray(newArray);
  };
  return (
    <>
      arr : [{array.join(",")}]
      <br />
      <button onClick={handler}>상태 업데이트!</button>
    </>
  );
}

export default Update;
