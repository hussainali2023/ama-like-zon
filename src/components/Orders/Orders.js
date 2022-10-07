import React from "react";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const { products, initialCart } = useLoaderData(); //{ products: products, initialCart: initialCart }
  return (
    <div>
      <h2>This is Orders{products.length}</h2>
      <p>Initial Cart {initialCart.length}</p>
    </div>
  );
};

export default Orders;
