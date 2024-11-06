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
import { ProductContext } from "../Context/ProductContext";

import { TextField, Button, Typography } from "@mui/material";
import Products from "./products/Products";

const SearchInput = () => {
  const { setSearchValue } = useContext(ProductContext);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    setError("");
  };

  const handleSearch = () => {
    const trimmedSearchInput = searchInput.trim();

    if (trimmedSearchInput === "" && !products) {
      setError("Invalid input: Search field cannot be empty.");
    } else {
      setSearchValue(trimmedSearchInput.toLowerCase()); // Case-insensitive search
      setError("");
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
      />

      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchInput;
