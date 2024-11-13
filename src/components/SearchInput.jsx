// import React, { useContext } from "react";
// import { ProductContext } from "../Context/ProductContext";

// import { TextField } from "@mui/material";

// const SearchInput = () => {
//   const { setSearchValue } = useContext(ProductContext);
//   const handleSearchChange = (event) => {
//     setSearchValue(event.target.value);
//   };
//   return (
//     <TextField
//       label="Search Products"
//       variant="outlined"
//       fullWidth
//       //  value={searchValue}
//       onChange={handleSearchChange}
//       margin="normal"
//     />
//   );
// };

// export default SearchInput;

// import React, { useContext, useState } from "react";
// import { ProductContext } from "../Context/ProductContext";

// import { TextField, Button } from "@mui/material";

// const SearchInput = () => {
//   const { setSearchValue } = useContext(ProductContext);
//   const [searchInput, setSearchInput] = useState("");

//   const handleSearchChange = (event) => {
//     setSearchInput(event.target.value);
//   };

//   const handleSearch = () => {
//     setSearchValue(searchInput);
//   };

//   return (
//     <div>
//       <TextField
//         label="Search Products"
//         variant="outlined"
//         fullWidth
//         value={searchInput}
//         onChange={handleSearchChange}
//         margin="normal"
//       />
//       <Button variant="contained" color="primary" onClick={handleSearch}>
//         Search
//       </Button>
//     </div>
//   );
// };

// export default SearchInput;
import React, { useContext, useState } from "react";

import { TextField, Button, Typography } from "@mui/material";
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
    <div>
      {error && <Typography color="error">{error}</Typography>}

      <TextField
        label="Search Products"
        variant="outlined"
        fullWidth
        value={searchInput}
        onChange={handleSearchChange}
        margin="normal"
        sx={{
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

      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchInput;
