import { Container, Typography, Grid2 } from "@mui/material";

import React, { useContext } from "react";
import Products from "../components/products/Products";

import { ProductContext } from "../Context/ProductContext";
import SearchInput from "../components/SearchInput";
import PaginationComponent from "../components/PaginationComponent";
import SortProduct from "../components/SortProduct";

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
      <PaginationComponent />
    </Container>
  );
}
//navgate
