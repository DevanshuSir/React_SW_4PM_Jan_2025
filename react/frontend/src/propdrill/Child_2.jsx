import React from "react";
import Child_3 from "./Child_3";

const Child_2 = ({ child2 }) => {
  return (
    <div>
      <h1>Child-2</h1>
      <Child_3 child3={child2} />
    </div>
  );
};

export default Child_2;
