import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const dyanmicValue = useParams();
  console.log(dyanmicValue);
  return (
    <div>
      <h1>Contact Comp...</h1>
    </div>
  );
};

export default Contact;
