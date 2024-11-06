import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../services/productService";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({}); // Use state if available
  const [isLoading, setIsLoading] = useState(true); // Set loading based on product availability
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const response = await getProductById(productId); // fetch product details

      console.log(response);
      setProduct(response.data.data);
    } catch (err) {
      setError("Failed to fetch product details");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
 {
      fetchProduct();
    }
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {product && (
        <>
          <h1>Name: {product.name}</h1>
          <p>Quantity: {product.quantity}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price} SR</p>
          <img src={product.imageIDs} alt={product.name} />{" "}
          {/* Display product image */}
        </>
      )}
    </div>
  );
};
export default ProductDetail;
