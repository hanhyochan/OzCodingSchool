import React from "react";

const Child = (props) => {
  return (
    <div style={{ border: `1px solid blue`, padding: `10px` }}>
      <p>이름</p>
      <div>{props.name}</div>
      <p>나이</p>
      <div>{props.age}</div>
      {props.isMarrid ? <div>비혼</div> : <div>미혼</div>}
    </div>
  );
};

export default Child;
