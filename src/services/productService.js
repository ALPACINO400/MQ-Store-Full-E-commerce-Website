export const getAllProducts = async () => {
  const response = await fetch("http://localhost:5125/api/v1/products");
  const data = await response.json();
  return data;
};
