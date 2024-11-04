import axios from "axios";

export const getAllProducts = async () => {
  const response = await fetch("http://localhost:5125/api/v1/products");
  const data = await response.json();
  return data;
};
export const getProductById = (productId) => {
  return axios.get(`http://localhost:5125/api/v1/products/${productId}`);
};
