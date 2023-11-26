import React from "react";
import App from './App.jsx'


function CounterApp() {
    // State to hold the count value
    const [count, setCount] = useState(1);
  
    // Function to increment the count
    const increment = () => {
      setCount(count + 1);
    };
  
    // Function to decrement the count
    const decrement = () => {
      setCount(count - 1);
    };
  
    // Function to reset the count to 0
    const reset = () => {
      setCount(0);
    };
  
    return (
      <div>
        <h1>React Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
  
  export default CounterApp;
