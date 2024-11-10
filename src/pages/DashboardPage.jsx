import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import Products from "../components/products/Products";
import { Box, Container, Grid2, Typography } from "@mui/material";
import SearchInput from "../components/SearchInput";
import SortProduct from "../components/SortProduct";
import PaginationComponent from "../components/PaginationComponent";
import { createProduct, DeleteProductById } from "../services/productService";
import AddProductForm from "../Forms/AddProductForm";

const DashboardPage = () => {
  const {
    products,
    isLoading,
    error,
    addProduct,
    updateProductById,
    deleteProductById,
  } = useContext(ProductContext);

  const [newProductData, setNewProductData] = useState({});
  const [editingProductId, setEditingProductId] = useState(null);
  const handleAddProduct = async (productData) => {
    try {
      const response = await createProduct(productData);
      console.log("Product added:", response);
      // Optionally, refresh product list or show a success message
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  const handleUpdateProduct = (productId, updatedData) => {
    updateProductById(productId, updatedData);
    setEditingProductId(null); // Close edit mode after updating
  };

  const handleDeleteProduct = (productId) => {
    deleteProductById(productId);
  };

  if (isLoading) {
    return <p>Loading products....</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h2>Add Product</h2>
      <AddProductForm onSubmit={handleAddProduct} />

      <SearchInput />

      <SortProduct />

      <div>
        <h2>Products</h2>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            {/* Display additional product details */}
            <button onClick={() => handleDeleteProduct(product.id)}>
              Delete
            </button>
            <button onClick={() => setEditingProductId(product.id)}>
              Edit
            </button>
            {editingProductId === product.id && (
              <div>
                {/* Form fields for editing a product */}
                <button
                  onClick={() =>
                    handleUpdateProduct(product.id, newProductData)
                  }
                >
                  Save
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
     <PaginationComponent />

    </div>
  );
};

export default DashboardPage;
