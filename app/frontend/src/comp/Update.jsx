import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [Sname, setSname] = useState(null);
  const [SRollNo, setSRollNo] = useState(null);
  const [IsMerried, setIsMerried] = useState(null);

  useEffect(() => {
    fetch(`/api/updatevalue/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        //   console.log(result);
        setSname(result.StudentName);
        setSRollNo(result.StudentRollNo);
      });
  }, []);

  function handleValidate() {
    const IsValue = window.confirm("Is Merried :- ");
    // console.log(IsValue);
    setIsMerried(IsValue);
  }

  function handleForm(e) {
    e.preventDefault();
    const formdata = { Sname, SRollNo, IsMerried };
    fetch(`/api/studentupdate/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.message === "Successfully update") {
          navigate("/data");
        }
      });
  }

  return (
    <div>
      <h1>Update Value</h1>

      <form action="" onSubmit={handleForm}>
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
        <label htmlFor="">IsMerried</label>
        <button onClick={handleValidate}>Enter Here</button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default Update;
