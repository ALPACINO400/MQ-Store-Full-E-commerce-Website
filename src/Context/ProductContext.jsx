// import React, { createContext, useEffect, useState } from "react";

// import { getAllProducts } from "../services/productService";

// export const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchValue, setSearchValue] = useState("");
//   const [pageNumber, setPageNumber] = useState(1);
//   const [totalPages, setTotalPages] = useState(10);
//   const [pageSize, setPageSize] = useState(2);
//   const [sortOrder, setSortOrder] = useState("name_asc");

//   const fetchData = async (searchValue, pageNumber, pageSize, sortOrder) => {
//     setIsLoading(true);
//     try {
//       const data = await getAllProducts(
//         pageNumber,
//         pageSize,
//         searchValue,
//         sortOrder
//       );

//       if (data.data.items.length === 0) {
//         setError("No products match your search.");
//       } else {
//         setError(null);
//       }
//       console.log("Fetched Data:", data); // Log fetched data for debugging

//       setProducts(data.data.items);
//       setTotalPages(data.data.totalPages);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData(searchValue, pageNumber, pageSize, sortOrder);
//   }, [searchValue, pageNumber, pageSize, sortOrder]);

//   return (
//     <ProductContext.Provider
//       value={{
//         products,
//         isLoading,
//         error,
//         searchValue,
//         setSearchValue,
//         pageNumber,
//         setPageNumber,
//         pageSize,
//         setPageSize,
//         sortOrder,
//         setSortOrder,
//         totalPages,
//       }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// }
// In ProductContext
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
  const [totalPages, setTotalPages] = useState(10);
  const [pageSize, setPageSize] = useState(2);
  const [sortOrder, setSortOrder] = useState("name_asc");

  const fetchData = async (searchValue, pageNumber, pageSize, sortOrder) => {
    setIsLoading(true);
    try {
      const data = await getAllProducts(
        pageNumber,
        pageSize,
        searchValue,
        sortOrder
      );
      setProducts(data.data.items);
      setTotalPages(data.data.totalPages);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const addProduct = async (newProduct) => {
    try {
      const addednewPeoduct = await createProduct(newProduct);
      console.log(addednewPeoduct)
      setProducts((prevProducts) => [...prevProducts, addednewPeoduct]);
    } catch (error) {
      setError("Failed to add product.");
    }
  };

  const updateProductById = async (id, updatedProductData) => {
    try {
      const updatedProduct = await updateProduct(id, updatedProductData);
      setProducts((prevProducts) =>
        prevProducts.map((prod) =>
          prod.id === id ? updatedProduct.data : prod
        )
      );
    } catch (error) {
      setError("Failed to update product.");
    }
  };

  const deleteProductById = async (id) => {
    try {
      const res = await DeleteProductById(id);
      console.log(res);
      setProducts((prevProducts) =>
        prevProducts.filter((prod) => prod.productId !== id)
      );
    } catch (error) {
      setError("Failed to delete product.");
    }
  };

  useEffect(() => {
    fetchData(searchValue, pageNumber, pageSize, sortOrder);
  }, [searchValue, pageNumber, pageSize, sortOrder]);

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
