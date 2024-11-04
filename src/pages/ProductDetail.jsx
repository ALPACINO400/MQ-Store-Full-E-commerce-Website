import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { getProductById } from "../services/productService";

const ProductDetail = () => {
  const location = useLocation();
  const { productId } = useParams();
  const [product, setProduct] = useState(location.state?.product || null); // Use state if available
  const [isLoading, setIsLoading] = useState(!product); // Set loading based on product availability
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!product) {
      const fetchProduct = async () => {
        setIsLoading(true);
        try {
          const response = await getProductById(productId); // fetch product details
          setProduct(response.data);
        } catch (err) {
          setError("Failed to fetch product details");
        } finally {
          setIsLoading(false);
        }
      };
      fetchProduct();
    }
  }, [product, productId]);

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
//useConext
//FindFunction