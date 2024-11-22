import React, { useContext, useState } from "react";

import { TextField, Button, Typography, Box } from "@mui/material";
import Products from "./products/Products";
import { ProductContext } from "../Context/ProductContext";

const SearchInput = () => {
  const { setSearchValue } = useContext(ProductContext);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    setError("");
  };

  const handleSearch = () => {
    try {
      const trimmedSearchInput = searchInput.trim();

      // Check for empty input
      if (trimmedSearchInput === "" && !products) {
        setError("Search field cannot be empty.or not found");
      } else {
        setSearchValue(trimmedSearchInput.toLowerCase()); // Case-insensitive search

        // Clear the error after a successful search
        setError("");
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Error occurred during search:");
      setError("An unexpected error occurred. Please try again.");
    }
  };


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      {error && <Typography color="error">{error}</Typography>}

      {/* Wrap the TextField and Button inside a Box to align them horizontally */}
      <Box sx={{ display: "flex", width: "100%", maxWidth: 500 }}>
        <TextField
          label="Search Products"
          variant="outlined"
          fullWidth
          value={searchInput}
          onChange={handleSearchChange}
          margin="normal"
          sx={{
            height: "50%", // Ensures the button height matches the text field height
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "lightblue", // Border color for default state
              },
              "&:hover fieldset": {
                borderColor: "#F5EFFF", // Border color when hovered
              },
              "&.Mui-focused fieldset": {
                borderColor: "#F5EFFF", // Border color when focused
              },
              color: "#F5EFFF", // Text color
            },
            "& .MuiInputLabel-root": {
              color: "#F5EFFF", // Label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#F5EFFF", // Label color when focused
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{
            ml: 1, // Adds margin to the left of the button for spacing
            height: "50%", // Ensures the button height matches the text field height
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchInput;
