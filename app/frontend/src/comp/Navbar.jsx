import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "30px" }}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/data"}>Data</Link>
        </li>
      </ul>
    </div>
  );
};

<ul>
  <li></li>
  <li></li>
</ul>;
export default Navbar;
