import React from "react";

import Product from "./Product";

const ListOfProduct = ({ products }) => {
  if (!products) {
    return <h2>Loading the Products </h2>;
  }
  return products.length > 0 ? (
    products.map((product) => (
      <Product
        className="ListOfProduct"
        key={product.id}
        title={product.title}
        location={product.location}
        image={product.image}
        price={product.price}
        quantity={product.quantity}
      />
    ))
  ) : (
    <p>No Products available at the moment. </p>
  );
};

export default ListOfProduct;
