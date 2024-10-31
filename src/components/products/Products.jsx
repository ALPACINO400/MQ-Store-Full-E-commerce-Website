import React, { useContext} from "react";
import { Link } from "react-router-dom";

import ProductTilte from "./ProductTilte";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import {ProductContext} from "../../Context/ProductContext";

const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products">
      {products.map(product => (
        <div key={product.productId} className="product-item">
          <ProductTilte title={product.name} />
          <ProductImage image={product.imageIDs} title={product.name} />
          <ProductPrice price={product.price} />
          <Link to={`/products/${product.productId}`}>Details</Link>
        </div>
      ))}
    </div>
  );
}
export default Products;