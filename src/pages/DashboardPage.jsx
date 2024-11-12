import React, { useEffect, useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import Products from "../components/products/Products";
import SearchInput from "../components/SearchInput";
import SortProduct from "../components/SortProduct";
import PaginationComponent from "../components/PaginationComponent";
import AddProductForm from "../Forms/AddProductForm";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { Button } from "@mui/material";
import { createProduct } from "../services/productService";

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
    // try {
      const response = await createProduct(productData);
      console.log("Product added:", response);
      // Optionally, refresh product list or show a success message
    // } catch (error) {
    //   console.error("Failed to add product:", error);
    // }
  };

  const handleUpdateProduct = (productId, updatedData) => {
    updateProductById(productId, updatedData);
    setEditingProductId(null); // Close edit mode after updating
  };

  const handleDeleteProduct = async (productId) => {
    const res = await deleteProductById(productId);
    return res;
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
          <div key={product.productId}>
            <p>product name {product.name}</p>
            <p>product description {product.description}</p>
            <p>product price {product.price}</p>
            <p>product quantity {product.quantity}</p>
            <p>{product.imageIDs}</p>
            <p>product categoryId{product.categoryId}</p>

            {/* Display additional product details */}
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDeleteProduct(product.productId)}
              sx={{ ml: 1 }}
            >
              Delete
            </Button>
            <button onClick={() => setEditingProductId(product.productId)}>
              Edit
            </button>
            {editingProductId === product.productId && (
              <div>
                {/* Form fields for editing a product */}
                <button
                  onClick={() =>
                    handleUpdateProduct(product.productId, newProductData)
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
