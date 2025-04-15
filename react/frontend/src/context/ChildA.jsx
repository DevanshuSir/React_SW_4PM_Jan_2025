import React, { useContext } from "react";
import ChildB from "./ChildB";
import { userAge } from "../App";

const ChildA = () => {
  const age = useContext(userAge);
  return (
    <div>
      <h1>Child-A {age}</h1>
      <ChildB />
    </div>
  );
};

export default ChildA;
