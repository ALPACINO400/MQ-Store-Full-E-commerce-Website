import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const AddProductForm = ({ onSubmit }) => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(productData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        width: "100%",
        maxWidth: "400px",
        margin: "auto",
        mt: 4,
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Add New Product
      </Typography>

      <TextField
        label="Product Name"
        name="name"
        value={productData.name}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Description"
        name="description"
        value={productData.description}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        required
      />

      <TextField
        label="Price"
        name="price"
        value={productData.price}
        onChange={handleChange}
        type="number"
        fullWidth
        required
      />

      <TextField
        label="Category"
        name="category"
        value={productData.category}
        onChange={handleChange}
        fullWidth
        required
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Product
      </Button>
    </Box>
  );
};

export default AddProductForm;
