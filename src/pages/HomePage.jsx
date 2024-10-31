import React, { useContext } from "react";
import Products from "../components/products/Products";

import { ProductContext } from "../Context/ProductContext";

export default function HomePage() {
  const { isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return <p>Loading products....</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h2>List of products</h2>
      <Products />
    </div>
  )
}
