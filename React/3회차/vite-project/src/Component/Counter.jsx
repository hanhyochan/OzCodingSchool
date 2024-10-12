import React, { Component } from "react";
import { useState } from "react";

// const Counter = () => {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(0);

//   const incrementCounter = () => {
//     setCounter(counter + 1);
//   };

//   const decrementCounter = () => {
//     setCounter(counter - 1);
//   };

//   const setCounterNum = () => {
//     setCounter(inputValue);
//   };

//   return (
//     <>
//       <Count counter={counter} />
//       <PlusBtn setCounter={setCounter} incrementCounter={incrementCounter} />
//       <MinusBtn setCounter={setCounter} decrementCounter={decrementCounter} />
//       <CounterInput
//         inputValue={inputValue}
//         setInputValue={setInputValue}
//         setCounter={setCounter}
//       />
//     </>
//   );

//   function CounterInput({ inputValue, setInputValue, setCounter }) {
//     return (
//       <>
//         <input
//           type="number"
//           value={inputValue}
//           onChange={(event) => setInputValue(event.target.value)}
//         />
//         <button onClick={setCounterNum}>입력</button>
//       </>
//     );
//   }

//   function Count({ counter }) {
//     return (
//       <>
//         <h1>Couter: {counter}</h1>
//       </>
//     );
//   }

//   function PlusBtn({ setCounter, incrementCounter }) {
//     return (
//       <button
//         // onClick={() => {
//         //   setCounter((prev) => prev + 1);
//         // }}
//         onClick={incrementCounter}
//       >
//         +
//       </button>
//     );
//   }

//   function MinusBtn({ setCounter }) {
//     return (
//       <button
//         // onClick={() => {
//         //   setCounter((prev) => prev - 1);
//         // }}
//         onClick={decrementCounter}
//       >
//         -
//       </button>
//     );
//   }
// };

class Counter extends Component {
  state = { counter: 0 };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <>
        <Count counter={this.state.counter} />
        <PlusBtn incrementCounter={this.incrementCounter} />
        <MinusBtn decrementCounter={this.decrementCounter} />
      </>
    );
  }
}

class PlusBtn extends Component {
  render() {
    return <button onClick={this.props.incrementCounter}>+</button>;
  }
}

class MinusBtn extends Component {
  render() {
    return <button onClick={this.props.decrementCounter}>-</button>;
  }
}

class Count extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    // console.log('props', this.props)
    return <h1>counter: {this.props.counter}</h1>;
  }
}

export default Counter;
