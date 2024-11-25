// import React, { useContext, useState } from "react";

// import { TextField, Button, Typography } from "@mui/material";
// import Products from "./products/Products";
// import { ProductContext } from "../Context/ProductContext";

// const SearchInput = () => {
//   const { setSearchValue } = useContext(ProductContext);
//   const [searchInput, setSearchInput] = useState("");
//   const [error, setError] = useState("");

//   const handleSearchChange = (event) => {
//     setSearchInput(event.target.value);
//     setError("");
//   };

//   const handleSearch = () => {
//     try {
//       const trimmedSearchInput = searchInput.trim();

//       // Check for empty input
//       if (trimmedSearchInput === "" && !products) {
//         setError("Search field cannot be empty.or not found");
//       } else {
//         setSearchValue(trimmedSearchInput.toLowerCase()); // Case-insensitive search

//         // Clear the error after a successful search
//         setError("");
//       }
//     } catch (error) {
//       // Handle unexpected errors
//       console.error("Error occurred during search:");
//       setError("An unexpected error occurred. Please try again.");
//     }
//   };


//   return (
//     <div>
//       {error && <Typography color="error">{error}</Typography>}

//       <TextField
//         label="Search Products"
//         variant="outlined"
//         fullWidth
//         value={searchInput}
//         onChange={handleSearchChange}
//         margin="normal"
//         sx={{
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//               borderColor: "lightblue", // Border color for default state
//             },
//             "&:hover fieldset": {
//               borderColor: "#F5EFFF", // Border color when hovered
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "#F5EFFF", // Border color when focused
//             },
//             color: "#F5EFFF", // Text color
//           },
//           "& .MuiInputLabel-root": {
//             color: "#F5EFFF", // Label color
//           },
//           "& .MuiInputLabel-root.Mui-focused": {
//             color: "#F5EFFF", // Label color when focused
//           },
//         }}
//       />

//       <Button variant="contained" color="primary" onClick={handleSearch}>
//         Search
//       </Button>
//     </div>
//   );
// };

// export default SearchInput;



import React, { useContext, useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
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
      if (trimmedSearchInput === "") {
        setError("Search field cannot be empty or not found.");
      } else {
        setSearchValue(trimmedSearchInput.toLowerCase()); // Case-insensitive search

        // Clear the error after a successful search
        setError("");
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Error occurred during search:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        margin: "20px auto 0", // Add some vertical margin and center horizontally
        maxWidth: "600px", // Limit width for better layout
        padding: "0 16px", // Add padding for smaller screens
        textAlign: "center", // Center the text
      }}
    >
      {error && (
        <Typography color="error" sx={{ marginBottom: "8px" }}>
          {error}
        </Typography>
      )}

      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <TextField
          label="Search Products"
          variant="outlined"
          fullWidth
          value={searchInput}
          onChange={handleSearchChange}
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{ minWidth: "100px" }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default SearchInput;
