import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Data = () => {
  const [Pdata, setPdata] = useState([]);

  async function data() {
    const products = await fetch("https://dummyjson.com/products");
    const allProduct = await products.json();
    console.log(allProduct);
    setPdata(allProduct.products);
  }

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <h1>Product Data</h1>
      {Pdata.map((value, index) => (
        <>
          <Link to={`/single/${value.id}`}>
            <h2>Title :- {value.title} </h2>
            <p>{value.description}</p>
          </Link>
        </>
      ))}
    </div>
  );
};

export default Data;
