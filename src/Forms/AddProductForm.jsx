import React, { useContext, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { createProduct } from "../services/productService";
import { ProductContext } from "../Context/ProductContext";

const AddProductForm = ({ onSubmit }) => {
  const { addProduct } = useContext(ProductContext);
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    categoryId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const res = await addProduct(productData); // Use context's createProduct function
    console.log("Product successfully created", res);
    // Optionally reset form fields
    } catch (error) {
      console.error("Error creating product:", error);
    }
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
        label="quantity"
        name="quantity"
        value={productData.quantity}
        onChange={handleChange}
        type="number"
        fullWidth
        required
      />

      <FormControl fullWidth required>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          name="categoryId"
          value={productData.categoryId}
          onChange={handleChange}
        >
          <MenuItem value="1499c195-309f-45d6-971f-011b522801fb">
            iPhones
          </MenuItem>
          <MenuItem value="97764aa9-abd3-4e29-a495-525939cc58ef">PCs</MenuItem>
          <MenuItem value="8b4647bd-6f63-4ff9-9e98-257a284fb644">
            Accessories
          </MenuItem>
        </Select>
      </FormControl>

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Product
      </Button>
    </Box>
  );
};

export default AddProductForm;
