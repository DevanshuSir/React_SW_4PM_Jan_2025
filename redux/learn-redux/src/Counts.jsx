import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "./features/input/inputSlice";

const Counts = () => {
  const counts = useSelector((state) => state.counter.value);

  const dispatchInput = useDispatch();

  const [text, setText] = useState("");

  function handleForm(e) {
    e.preventDefault();
    dispatchInput(setInputValue(text));
  }

  return (
    <div>
      <h1>Counts Comp {counts}</h1>

      <form action="" onSubmit={handleForm}>
        <input
          type="text"
          name=""
          id=""
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Counts;
