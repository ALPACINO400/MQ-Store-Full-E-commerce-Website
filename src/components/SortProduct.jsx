import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const SortProduct = () => {
  const { sortOrder, setSortOrder } = useContext(ProductContext);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth margin="normal" sx={{ color: "#FBFBFB" }}>
        <InputLabel id="sort-label" sx={{ color: "white" }}>
          Sort By
        </InputLabel>
        <Select
          labelId="sort-label"
          value={sortOrder}
          label="Sort By"
          onChange={handleSortChange}
          sx={{
            color: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white", // Border color for default state
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "lightgray", // Border color on hover
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "lightgray", // Border color when focused
            },
            "& .MuiSvgIcon-root": {
              color: "white", // Icon color
            },
          }}
        >
          <MenuItem value="name_asc">Name (A-Z)</MenuItem>
          <MenuItem value="name_desc">Name (Z-A)</MenuItem>
          <MenuItem value="price_asc">Price (Low to High)</MenuItem>
          <MenuItem value="price_desc">Price (High to Low)</MenuItem>
          <MenuItem value="date_asc">Date (Oldest First)</MenuItem>
          <MenuItem value="date_desc">Date (Newest First)</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortProduct;
