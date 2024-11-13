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
  const [isLoading, setIsLoading] = useState(true); // Set loading based on product availability
  const [error, setError] = useState(null);


  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const response = await getProductById(productId); // fetch product details

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
    // <div>
    //   {product && (
    //     <>
    //       <h1>Name: {product.name}</h1>
    //       <p>Quantity: {product.quantity}</p>
    //       <p>Description: {product.description}</p>
    //       <p>Price: {product.price} SR</p>
    //       <img src={product.imageIDs} alt={product.name} />{" "}
    //     </>
    //   )}
    // </div>
    // );
    <div>
      {product && (
        <Card
          sx={{
            maxWidth: 800,
            margin: "20px auto",
            backgroundColor: "#D6C0B3",
          }}
        >
          {product.imageIDs && (
            <CardMedia
              component="img"
              height="200" // Set a consistent height for the image
              image={product.imageIDs}
              alt={product.name}
              sx={{
                objectFit: "center", // Makes the image cover the available area
                border: "1px solid black", // Set border color and thickness here
                backgroundColor: "black", // Background color inside the border

                width: "50%", // Ensure it takes full width of the card
                height: "auto", // Control image height
                margin: "0 auto", // Centers the image horizontally

                borderBottom: "1px solid #ddd", // Optional border for separation
                display: "block", // Ensures the image behaves like a block element

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
                backgroundColor: "black", // Set button background color to black
                color: "white", // Set text color to white
                marginTop: "16px",
                "&:hover": {
                  backgroundColor: "darkgray", // Optional: set hover color
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
