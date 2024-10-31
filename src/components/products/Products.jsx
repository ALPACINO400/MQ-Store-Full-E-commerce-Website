import React, { useEffect, useState } from "react";

const Products = ({products}) => {
 const { products } = useContext(ProductContext);

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.ProductId}>
            <h2>{product.Name}</h2>
          </div>
        );
      })}
    </div>
    
  );
};

export default Products;
