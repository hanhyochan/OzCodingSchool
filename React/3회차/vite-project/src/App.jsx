import React, { Component } from "react";
import { useState } from "react";

// const App = () => {
//   const [counter, setCounter] = useState(0)
//   return (
//     <>
//       <h1>Couter: {counter}</h1>
//       <button onClick={() => {setCounter((prev) => prev + 1)}}>+</button>
//       <button onClick={() => {setCounter((prev) => prev - 1)}}>-</button>
//     </>
//   );
// };

class App extends Component {
  state = { counter: 0 };
  render() {
    return (
      <>
        <h1>counter: {this.state.counter}</h1>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>+</button>
        <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
      </>
    );
  }
}

export default App;
