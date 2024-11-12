// import axios, { Axios } from "axios";

// const baseURL = "http://localhost:5125/api/v1/products";
// export const getAllProducts = async (
//   pageNumber = 1,
//   pageSize = 1,
//   searchValue = "",
//   sortOrder = "name_asc"
// ) => {
//   const params = new URLSearchParams();
//   params.append("pageNumber", pageNumber);
//   params.append("psgeSize", pageSize);

//   if (searchValue) {
//     params.append("search", searchValue);
//   }
//   if (sortOrder) {
//     params.append("sortOrder", sortOrder);
//   }
//   const response = await axios.get(`${baseURL}?${params.toString()}`);
//   console.log(response);
//   return response.data;
// };

// import axios from "axios";

// const baseURL = "http://localhost:5125/api/v1/products";

// export const getAllProducts = async (
//   pageNumber = 1,
//   pageSize = 5,
//   searchValue = "",
//   sortOrder = "name_asc"
// ) => {
//   const params = new URLSearchParams();
//   params.append("pageNumber", pageNumber);
//   params.append("pageSize", pageSize); // Corrected typo here

//   if (searchValue) {
//     params.append("search", searchValue);
//   }
//   if (sortOrder) {
//     params.append("sortOrder", sortOrder);
//   }

//   const url = `${baseURL}?${params.toString()}`;
//   console.log("Request URL:", url); // Debugging log for URL
//   const response = await axios.get(url);
//   console.log("API Response:", response.data); // Debugging log for API response
//   return response.data;
// };

import axios from "axios";

const baseURL = "http://localhost:5125/api/v1/products";

// baseURL?pageNumber=1&pageSize=10&search=lala&sortOrder=name_asc

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
  // try {
    const response = await axios.post(`${baseURL}` , productData);

    console.log(response)
  
    return response.data;
  // } catch (error) {
  //   console.error("Error in createProduct:", error);
  //   throw error; // rethrow to handle it where this function is called
  // }
};  
export const updateProduct = async (productId, productData) => {
  const response = await axios.put(`${baseURL}/${productId}`, productData);
  return response.data;
};

export const DeleteProductById = async (productId) => {
  const response = await axios.delete(
    `http://localhost:5125/api/v1/products/${productId}`
  );
  return response;
};

export const getProductById = async (productId) => {
  const response = await axios.get(
    `http://localhost:5125/api/v1/products/${productId}`
  );
  return response;
};

// //
// export const createAdminProduct = async (productData) => {
//   try {
//     const response = await axios.post(baseURL, productData);
//     return response.data;
//   } catch (error) {
//     console.error("Error in createProduct:", error);
//     throw error;
//   }
// };

// export const getAdminAllProducts = async (
//   pageNumber = 1,
//   pageSize = 5,
//   searchValue = "",
//   sortOrder = "name_asc"
// ) => {
//   const params = new URLSearchParams();
//   params.append("pageNumber", pageNumber);
//   params.append("pageSize", pageSize);

//   if (searchValue) params.append("search", searchValue);
//   if (sortOrder) params.append("sortOrder", sortOrder);

//   try {
//     const response = await axios.get(`${baseURL}?${params.toString()}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error in getAllProducts:", error);
//     throw error;
//   }
// };

// export const deleteAdminProduct = async (id) => {
//   try {
//     await axios.delete(`${baseURL}/${id}`);
//   } catch (error) {
//     console.error("Error in deleteProduct:", error);
//     throw error;
//   }
// };

// export const updateAdminProduct = async (id, productData) => {
//   try {
//     const response = await axios.put(`${baseURL}/${id}`, productData);
//     return response.data;
//   } catch (error) {
//     console.error("Error in updateProduct:", error);
//     throw error;
//   }
// };
