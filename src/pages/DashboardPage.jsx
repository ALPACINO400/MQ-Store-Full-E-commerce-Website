import React, { useEffect, useContext, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import Products from "../components/products/Products";
import SearchInput from "../components/SearchInput";
import SortProduct from "../components/SortProduct";
import PaginationComponent from "../components/PaginationComponent";
import AddProductForm from "../Forms/AddProductForm";
import { Outlet } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
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
    try {
      const response = await createProduct(productData);
      console.log("Product added:", response);
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product.productId);
    setNewProductData({
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      categoryId: product.categoryId,
      imageIDs: product.imageIDs,
    });
  };
  const handleUpdateProduct = () => {
    if (editingProductId) {
      updateProductById(editingProductId, newProductData);
      setEditingProductId(null); // Close edit mode after updating
      setNewProductData({}); // Clear form data
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
    <Container maxWidth="lg" sx={{ mt: 6, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Admin Dashboard
      </Typography>

      {/* Add Product Form */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h5"></Typography>
        <AddProductForm onSubmit={handleAddProduct} />
      </Box>

      {/* Search and Sort Options */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <SearchInput />
        <SortProduct />
      </Box>

      {/* Product List */}
      <Typography variant="h5" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.productId}>
            <Card
              variant="outlined"
              sx={{ minHeight: 300, borderRadius: 2, boxShadow: 3 }}
            >
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  {product.name}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Description:</strong> {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Price:</strong> ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Quantity:</strong> {product.quantity}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Category ID:</strong> {product.categoryId}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Image ID:</strong> {product.imageIDs}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeleteProduct(product.productId)}
                  sx={{ mr: 1 }}
                >
                  Delete
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleEditProduct(product)}
                >
                  Edit
                </Button>
              </CardActions>

              {editingProductId === product.productId && (
                <Box sx={{ p: 2 }}>
                  <TextField
                    label="Product Name"
                    name="name"
                    value={newProductData.name || ""}
                    onChange={handleFormChange}
                    fullWidth
                    required
                  />
                  <TextField
                    label="Description"
                    name="description"
                    value={newProductData.description || ""}
                    onChange={handleFormChange}
                    fullWidth
                    multiline
                    required
                  />
                  <TextField
                    label="Price"
                    name="price"
                    type="number"
                    value={newProductData.price || ""}
                    onChange={handleFormChange}
                    fullWidth
                    required
                  />
                  <TextField
                    label="Quantity"
                    name="quantity"
                    type="number"
                    value={newProductData.quantity || ""}
                    onChange={handleFormChange}
                    fullWidth
                    required
                  />
                  <FormControl
                    fullWidth
                    required
                    variant="outlined"
                    sx={{ mt: 2 }}
                  >
                    <InputLabel>Category</InputLabel>
                    <Select
                      label="Category"
                      name="categoryId"
                      value={newProductData.categoryId || ""}
                      onChange={handleFormChange}
                    >
                      <MenuItem value="1499c195-309f-45d6-971f-011b522801fb">
                        Phones
                      </MenuItem>
                      <MenuItem value="97764aa9-abd3-4e29-a495-525939cc58ef">
                        PCs
                      </MenuItem>
                      <MenuItem value="8b4647bd-6f63-4ff9-9e98-257a284fb644">
                        Accessories
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="Image"
                    name="imageIDs"
                    value={newProductData.imageIDs || ""}
                    onChange={handleFormChange}
                    fullWidth
                    required
                    variant="outlined"
                    sx={{ mt: 2 }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      handleUpdateProduct(product.productId, newProductData)
                    }
                    fullWidth
                  >
                    Save
                  </Button>
                </Box>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <PaginationComponent />
      </Box>
    </Container>
  );
};

export default DashboardPage;
