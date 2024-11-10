import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import ProductTilte from "./ProductTilte";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import { ProductContext } from "../../Context/ProductContext";
import useCart from "../../hooks/useCart";

const Products = (product) => {
  const { addToCart } = useCart();

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
            click for more Details..
          </Link>
          <Button
            variant="contained"
            onClick={() => addToCart(product)}
          fullWidth
            sx={{
              backgroundColor: "black", // Set button background color to black
              color: "white", // Set text color to white
              marginTop: "16px",
              "&:hover": {
                backgroundColor: "darkgray", // Optional: set hover color
              },
            }}
          >
            Add To Cart
          </Button>
          ;
        </div>
      ))}
    </div>
  );
};
export default Products;
