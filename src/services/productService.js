import axios from "axios";

const baseURL =
  "https://sda-3-onsite-backend-teamwork-gs0y.onrender.com/api/v1/products";

export const getAllProducts = async (
  PageNumber = 1,
  PageSize = 2,
  Search = "",
  SortOrder = "name_asc"
) => {
  const params = new URLSearchParams();

  params.append("PageNumber", PageNumber);
  params.append("PageSize", PageSize);

  if (Search) {
    params.append("Search", Search);
  }

  if (SortOrder) {
    params.append("SortOrder", SortOrder);
  }
  console.log(`${baseURL}?${params.toString()}`);
  const response = await axios.get(`${baseURL}?${params.toString()}`);
  return response.data;
};

export const createProduct = async (productData) => {
  console.log(createProduct);
  const response = await axios.post(`${baseURL}`, productData);

  console.log(response);

  return response.data;
};

export const updateProduct = async (productId, updatedData) => {
  try {
    const response = await fetch(
      `https://sda-3-onsite-backend-teamwork-gs0y.onrender.com/api/v1/products/${productId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );
    if (!response.ok) throw new Error("Failed to update product");
    return await response.json();
  } catch (error) {
    console.error("Update error:", error);
    throw error;
  }
};

export const DeleteProductById = async (productId) => {
  const response = await axios.delete(
    `https://sda-3-onsite-backend-teamwork-gs0y.onrender.com/api/v1/products/${productId}`
  );
  return response;
};

export const getProductById = async (productId) => {
  const response = await axios.get(
    `https://sda-3-onsite-backend-teamwork-gs0y.onrender.com/api/v1/products/${productId}`
  );
  return response;
};
