import { useState } from "react";
import CounterCss from "./counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className={CounterCss.counter}>
        <div className={CounterCss.main}>
          <h1 className="text-center">
            {count === 10 ? "🎉" : count === 20 ? "😍" : ""}
          </h1>
          <h1 className="text-center text-warning">Counter App</h1>
          <button
            className="btn btn-success form-control"
            onClick={handleIncrement}
            style={{ display: count === 10 ? "none" : "" }}
          >
            Increment
          </button>
          <h2 className="text-center text-info">{count}</h2>
          <button
            className="btn btn-danger form-control"
            onClick={handleDecrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
