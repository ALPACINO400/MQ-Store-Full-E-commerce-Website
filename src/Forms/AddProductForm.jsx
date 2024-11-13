import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
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
    imageIDs: "",
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
      console.log(productData);
      const res = await addProduct(productData);
      console.log("Product successfully created", res);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 4,
        maxWidth: "500px",
        margin: "auto",
        mt: 4,
        backgroundColor: "white",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
        }}
      >
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          Add New Product
        </Typography>

        <TextField
          label="Product Name"
          name="name"
          value={productData.name}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
        />

        <TextField
          label="Description"
          name="description"
          value={productData.description}
          onChange={handleChange}
          multiline
          rows={3}
          fullWidth
          required
          variant="outlined"
        />

        <TextField
          label="Price"
          name="price"
          value={productData.price}
          onChange={handleChange}
          type="number"
          fullWidth
          required
          variant="outlined"
        />

        <TextField
          label="Quantity"
          name="quantity"
          value={productData.quantity}
          onChange={handleChange}
          type="number"
          fullWidth
          required
          variant="outlined"
        />

        <FormControl fullWidth required variant="outlined">
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            name="categoryId"
            value={productData.categoryId}
            onChange={handleChange}
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
          label="Image "
          name="imageIDs"
          value={productData.imageIDs}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, backgroundColor: "black" }}
        >
          Add Product
        </Button>
      </Box>
    </Paper>
  );
};

export default AddProductForm;
