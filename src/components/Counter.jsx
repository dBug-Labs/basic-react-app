import { useState } from "react";
import reactLogo from "../assets/react.svg";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter</h1>
      <div className="card">
        <button
          className="filled"
          onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>Reset Counter</button>
      </div>
      <p className="paragraph">Try clicking the counter!!</p>
    </div>
  );
}

export { Counter };
