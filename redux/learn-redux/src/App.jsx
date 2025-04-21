import React, { useState } from "react";
import Test from "./Test";
import Counts from "./Counts";
import { useSelector } from "react-redux";
import ReducerHook from "./ReducerHook";

const App = () => {
  const [name, setName] = useState("Devanshu");

  const inputValue = useSelector((state) => state.input.text);

  return (
    <div>
      <h1>{inputValue}</h1>
      <button
        onClick={() => {
          setName("Manny");
        }}
      >
        Update Name
      </button>

      <Test />
      <Counts />

      <ReducerHook />
    </div>
  );
};

export default App;
