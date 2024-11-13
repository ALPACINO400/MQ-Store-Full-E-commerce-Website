
import React, { createContext, useEffect, useState } from "react";
import {
  getAllProducts,
  DeleteProductById,
  getProductById,
  createProduct,
  updateProduct,
} from "../services/productService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(10); // Number of products per page
  const [pageSize, setPageSize] = useState(3); // Number of products per page
  const [sortOrder, setSortOrder] = useState("name_asc");

  // Function to fetch products from the backend
  const fetchData = async (searchValue, pageNumber, pageSize, sortOrder) => {
    setIsLoading(true);
    try {
      // Call the getAllProducts service function with the current parameters
      const data = await getAllProducts(
        pageNumber,
        pageSize,
        searchValue,
        sortOrder
      );
      // Update state with fetched products and total pages

      setProducts(data.data.items);
      setTotalPages(data.data.totalPages);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to add a new product to the list
  const addProduct = async (newProduct) => {
    try {
      const addednewPeoduct = await createProduct(newProduct);
      console.log(addednewPeoduct);
      // Update state by adding the new product to the products list
      setProducts((prevProducts) => [...prevProducts, addednewPeoduct]);
    } catch (error) {
      setError("Failed to add product.");
    }
  };

  // const updateProductById = async (id, updatedProductData) => {
  //   try {
  //     const updatedProduct = await updateProduct(id, updatedProductData);
  //     setProducts((prevProducts) =>
  //       prevProducts.map((prod) =>
  //         prod.id === id ? updatedProduct.data : prod
  //       )
  //     );
  //   } catch (error) {
  //     setError("Failed to update product.");
  //   }
  // };

  // Function to update a product by its ID
  const updateProductById = async (productId, updatedData) => {
    try {
      // Call API or service function to update the product on the backend
      const updatedProduct = await productService.updateProduct(
        productId,
        updatedData
      );

      // Update the products state by replacing the old product with the updated one
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.productId === productId ? updatedProduct : product
        )
      );
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProductById = async (id) => {
    try {
      const res = await DeleteProductById(id); // Call the service to delete the product
      console.log(res);
      // Remove the deleted product from the products list in the state
      setProducts((prevProducts) =>
        prevProducts.filter((prod) => prod.productId !== id)
      );
    } catch (error) {
      setError("Failed to delete product.");
    }
  };

  // useEffect hook to fetch products whenever search value, page number, page size, or sort order changes
  useEffect(() => {
    fetchData(searchValue, pageNumber, pageSize, sortOrder); // Fetch products when dependencies change
  }, [searchValue, pageNumber, pageSize, sortOrder]);
  
  // Provide the product context values to children components
  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        error,
        searchValue,
        setSearchValue,
        pageNumber,
        setPageNumber,
        pageSize,
        setPageSize,
        sortOrder,
        setSortOrder,
        totalPages,
        addProduct,
        updateProductById,
        deleteProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
