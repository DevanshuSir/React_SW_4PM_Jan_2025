import { useState } from "react";

function LearnUse() {
  const userData = {
    userName: "Devanshu",
    lastName: "Kumawat",
  };

  const [data, setData] = useState(userData);

  function handleValue() {
    setData({ ...data, userName: "Manny" });
  }

  return (
    <>
      <h1>
        Hello {data.userName} {data.lastName}
      </h1>

      <button onClick={handleValue}>Update</button>
    </>
  );
}

export default LearnUse;
