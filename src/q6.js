import React, { useState } from "react";
import "./App.css";

function Q6() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <div className="counter">
        <button onClick={decrementCounter}>-</button>
        <span>{count}</span>
        <button onClick={incrementCounter}>+</button>
      </div>
    </div>
  );
}

export default Q6;
