import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import ProductTilte from "./ProductTilte";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import { ProductContext } from "../../Context/ProductContext";


const Products = () => {
  const { products, isLoading, error } = useContext(ProductContext);

 if (isLoading) {
   return <Typography variant="h2">Loading Products...</Typography>;
 }
 if (error) {
   return <Typography variant="h2">{error}</Typography>;
 }
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.productId} className="product-item">
          <ProductTilte title={product.name} />
          <ProductImage image={product.imageIDs} title={product.name} />
          <ProductPrice price={product.price} />
          <Link
            to={`/products/${product.productId}`}
            state={{ product }} // Pass product data as state
          >
           click for more  Details..
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Products;

