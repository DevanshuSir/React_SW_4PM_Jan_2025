import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";

const Test = () => {
  const counts = useSelector((state) => state.counter.value);
  const dispatchValue = useDispatch();

  return (
    <div>
      <h1>Child Comp {counts} </h1>

      <button onClick={() => dispatchValue(increment())}>Increment</button>
      <button onClick={() => dispatchValue(decrement())}>Decrement</button>
    </div>
  );
};

export default Test;
