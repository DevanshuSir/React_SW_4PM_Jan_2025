import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Stuednt = () => {
  const [Sname, setSname] = useState(null);
  const [SRollNo, setSRollNo] = useState(null);
  const [IsMerried, setIsMerried] = useState(null);

  const navigate = useNavigate();

  function handleValidate() {
    const IsValue = window.confirm("Is Merried :- ");
    // console.log(IsValue);
    setIsMerried(IsValue);
  }

  function hnadleForm(e) {
    e.preventDefault();
    // console.log({ Name: Sname, "Roll-No": SRollNo, Merried: IsMerried });
    const formData = { Sname, SRollNo, IsMerried };
    fetch("/api/studentdata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.message === "Successfully Insert Data") {
          navigate("/data");
        }
      });
  }

  return (
    <div>
      <form action="" onSubmit={hnadleForm}>
        <label htmlFor="">StudentName</label>
        <input
          type="text"
          name=""
          id=""
          value={Sname}
          onChange={(e) => {
            setSname(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="">StudentRollNo</label>
        <input
          type="number"
          name=""
          id=""
          value={SRollNo}
          onChange={(e) => {
            setSRollNo(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="">IsMerried</label>
        <button onClick={handleValidate}>Enter Here</button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default Stuednt;
