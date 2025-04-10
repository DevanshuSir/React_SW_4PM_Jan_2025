import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const productId = useParams();

  const [image, setImage] = useState([]);

  async function data() {
    const products = await fetch(
      `https://dummyjson.com/products/${productId.id}`
    );
    const allProduct = await products.json();
    setImage(allProduct.images[0]);
  }

  console.log(image);

  useEffect(() => {
    data();
  }, []);

  console.log(productId);
  return (
    <div>
      <h1>SingleData Id - {productId.id}</h1>
      <img src={image} alt="" width={"200px"} />
    </div>
  );
};

export default SinglePage;
