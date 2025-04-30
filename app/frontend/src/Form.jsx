import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Form = () => {
  const [userName, setUserName] = useState("");

  const [userData, setUserData] = useState([]);

  function handleForm(e) {
    e.preventDefault();
    const formData = { user: userName };

    fetch("/api/userdata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        toast.success(result.message);
      });
  }

  function handleValue(e) {
    setUserName(e.target.value);
  }

  useEffect(() => {
    fetch("/api/data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      });
  });

  function handleDelete(id) {
    // console.log(id);
    fetch(`/api/datadelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);
        toast.error(result.message);
      });
  }

  return (
    <div>
      <h1>User Form</h1>
      <form action="" onSubmit={handleForm} method="post">
        <input
          type="text"
          name=""
          id=""
          value={userName}
          onChange={handleValue}
        />
        <input type="submit" value="Submit Value" />
      </form>

      {userData.map((value, index) => (
        <div key={index}>
          <span>{value.user}</span>
          <button
            onClick={() => {
              handleDelete(index);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Form;
