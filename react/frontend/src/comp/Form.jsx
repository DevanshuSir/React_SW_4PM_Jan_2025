import { useState } from "react";
import FormCss from "./form.module.css";
import toast from "react-hot-toast";

function Form() {
  const [userName, setUser] = useState("");
  const [userPass, setPass] = useState("");
  const [userValue, setUserValue] = useState("");

  function handleForm(event) {
    event.preventDefault();
    console.log({ UserName: userName, UserPassword: userPass });
    setUserValue(userName);
    toast.error(`Hello ${userName}`);
  }

  return (
    <>
      <div className={FormCss.main}>
        <div className={FormCss.form}>
          <form onSubmit={handleForm}>
            <h1 className="text-center text-light">
              {userValue === "" ? "User Form" : "Hello " + userValue}
            </h1>
            <label>UserName</label>
            <input
              type="text"
              className="form-control"
              value={userName}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={userPass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <button type="submit" className="form-control btn btn-warning mt-2">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
