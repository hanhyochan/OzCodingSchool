import React, { useState, useEffect } from "react";

function App() {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <>
      {showCounter && <Counter />}
      <button onClick={() => setShowCounter((prev) => !prev)}>show?</button>
    </>
  );
}

function Counter() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(100);

  // 1. 컴포넌트가 최초로 렌더링 될 때만 조작
  useEffect(() => {
    console.log("맨 처음 렌더링 될 때");
  }, []);

  // 2. 컴포넌트가 리렌더링 될 때 조작
  useEffect(() => {
    console.log("리렌더링...");
  });

  // 3. 특정 상태값이 변할 때에만 조작
  useEffect(() => {
    console.log("counter의 값이 변할 때");
  }, [counter]);

  // 4. 컴포넌트가 최종적으로 언마운트 될 때 조작
  useEffect(() => {
    return () => {
      console.log("렌더링이 끝났습니다");
    };
  }, []);

  return (
    <>
      <div>counter : {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+1</button>

      <div>counter : {counter2}</div>
      <button onClick={() => setCounter2(counter2 - 1)}>-1</button>
    </>
  );
}

// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = { counter: 1 };
//     console.log("constructor");
//   }

//   componentDidMount() {
//     console.log("DidMount");
//   }

//   componentDidUpdate() {
//     console.log("DidUpdate");
//   }

//   componentWillUnmount() {
//     console.log("WillUnmount");
//   }
//   render() {
//     console.log("render");
//     return (
//       <>
//         <div>counter : {this.state.counter}</div>
//         <button
//           onClick={() =>
//             this.setState({
//               counter: this.counter + 1,
//             })
//           }
//         >
//           +1
//         </button>
//       </>
//     );
//   }
// }

export default App;
