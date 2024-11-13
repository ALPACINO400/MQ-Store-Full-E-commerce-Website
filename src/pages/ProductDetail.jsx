import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";

import useCart from "../hooks/useCart";

const ProductDetail = () => {
  const { addToCart } = useCart();
  const { productId } = useParams();
  const [product, setProduct] = useState({}); // Use state if available
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const response = await getProductById(productId);

      console.log(response);
      setProduct(response.data.data);
    } catch (err) {
      setError("Failed to fetch product details");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    {
      fetchProduct();
    }
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {product && (
        <Card
          sx={{
            maxWidth: 800,
            margin: "20px auto",
            backgroundColor: "#F0F0F0",
          }}
        >
          {product.imageIDs && (
            <CardMedia
              component="img"
              height="200"
              image={product.imageIDs}
              alt={product.name}
              sx={{
                objectFit: "center",
                border: "1px solid black",
                backgroundColor: "black",
                width: "50%",
                height: "auto",
                margin: "0 auto",
                borderBottom: "1px solid #ddd",
                display: "block",
              }}
            />
          )}
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Description: {product.description}
            </Typography>
            <Divider sx={{ margin: "20px 0" }} />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h6">Price:</Typography>
                <Typography variant="body1">{product.price} SR</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Quantity Available:</Typography>
                <Typography variant="body1">{product.quantity}</Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6">Created At:</Typography>
                <Typography variant="body1">
                  {new Date(product.createdAt).toLocaleDateString()}{" "}
                  {new Date(product.createdAt).toLocaleTimeString()}
                </Typography>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              onClick={() => addToCart(product)}
              fullWidth
              sx={{
                backgroundColor: "black",
                color: "white",
                marginTop: "16px",
                "&:hover": {
                  backgroundColor: "darkgray",
                },
              }}
            >
              Add To Cart
            </Button>
            ;
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProductDetail;
