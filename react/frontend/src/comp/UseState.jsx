import { useState } from "react";

function UseState() {
  //   let firstName = "Devanshu";

  //   function changeValue() {
  //     firstName = "Manny";
  //     console.log(firstName);
  //   }

  //   console.log(firstName);

  const [firstName, setFirstName] = useState("Devanshu");

  function changeValue() {
    setFirstName("Manny");
  }

  return (
    <>
      <h1>Learn UseState Hook</h1>
      <h2>{firstName}</h2>
      <button onClick={changeValue}>Change Value</button>
    </>
  );
}

export default UseState;
