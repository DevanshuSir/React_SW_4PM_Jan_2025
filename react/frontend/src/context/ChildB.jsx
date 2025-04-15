import React from "react";
import ChildC from "./ChildC";
import { data } from "../App";

const ChildB = () => {
  return (
    <div>
      <data.Consumer>
        {(name) => {
          return (
            <>
              <h1>Child-B {name}</h1>
            </>
          );
        }}
      </data.Consumer>

      <ChildC />
    </div>
  );
};

export default ChildB;
