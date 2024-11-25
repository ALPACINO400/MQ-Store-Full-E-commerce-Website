import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ProductTilte from "./ProductTilte";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import { ProductContext } from "../../Context/ProductContext";
import useCart from "../../hooks/useCart";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const Products = (product) => {
  const { addToCart } = useCart();

  const { products, isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return <Typography variant="h2">Loading Products...</Typography>;
  }
  if (error) {
    return <Typography variant="h2">{error}</Typography>;
  }
  return (
    <Grid
      container
      spacing={3}
      sx={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}
    >
      {/* Iterate over the products array to display each product */}
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.productId}>
          <Card
            sx={{
              backgroundColor: "white ",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "15px",
              height: "100%",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={product.imageIDs}
              alt={product.name}
              sx={{
                objectFit: "cover",
                border: "1px solid white",
                backgroundColor: "white",
                width: "90%",
                height: "auto",
                borderBottom: "1px solid #ddd",
              }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component="h1"
                sx={{
                  color: "black",
                  fontSize: "1.3rem",
                  marginBottom: "0.8rem",
                }}
              >
                {product.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "black", fontSize: "1.2rem" }}
              >
                Price: {product.price} SR
              </Typography>
            </CardContent>
            <Link
              to={`/products/${product.productId}`}
              state={{ product }}
              style={{
                textDecoration: "none",
                color: "blue",
                fontSize: "1.3rem",
                marginBottom: "auto",
              }}
            >
              Click for more details...{" "}
            </Link>
            <Button
              variant="contained"
              fullWidth
              onClick={() => addToCart(product)}
              sx={{
                backgroundColor: "black",
                color: "white",
                padding: "10px 15px",
                borderRadius: "4px",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#e63946",
                },
              }}
            >
              Add To Cart
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default Products;
