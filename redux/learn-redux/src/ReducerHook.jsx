import React, { useReducer } from "react";

const ReducerHook = () => {
  const initialState = {
    value: 0,
    text: "",
  };

  function reducer(state, action) {
    switch (action) {
      case "Increment":
        return {
          value: state.value + 1,
        };

      case "Decrement":
        return {
          value: state.value - 1,
        };

      default:
        return {
          value: state.value,
        };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Reducer Counts :- {state.value}</h1>
      <button
        onClick={() => {
          dispatch("Increment");
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch("Decrement");
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default ReducerHook;
