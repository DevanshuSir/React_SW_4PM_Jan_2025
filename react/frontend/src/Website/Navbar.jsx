import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ width: "100%", height: "15vh", backgroundColor: "orange" }}>
      <ul>
        <li>
          <Link to={"/"}>Homepage</Link>
        </li>
        <li>
          <Link to={"/about"}>AboutPage</Link>
        </li>
        <li>
          <Link to={"/data"}>Data</Link>
        </li>
        <li>
          <Link to={"/tailwind"}>Tailwind Css</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
