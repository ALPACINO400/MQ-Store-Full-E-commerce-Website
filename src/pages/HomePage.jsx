import { Container, Typography, Grid2, Box } from "@mui/material";

import Products from "../components/products/Products";

import SearchInput from "../components/SearchInput";
import PaginationComponent from "../components/PaginationComponent";
import SortProduct from "../components/SortProduct";
import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";

export default function HomePage() {
  const { isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return <p>Loading products....</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        List of products
      </Typography>
      <Grid2 item xs={12} md={6}>
        <SearchInput />
      </Grid2>
      <Grid2 item xs={12} md={3}>
        <SortProduct />
      </Grid2>
      <Products />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <PaginationComponent />
      </Box>
    </Container>
  );
}
