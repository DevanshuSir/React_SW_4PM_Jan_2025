import React from "react";
import Child_2 from "./Child_2";

const Child_1 = ({ userName }) => {
  return (
    <div>
      <h1>Child-1 </h1>
      <Child_2 child2={userName} />
    </div>
  );
};

export default Child_1;
