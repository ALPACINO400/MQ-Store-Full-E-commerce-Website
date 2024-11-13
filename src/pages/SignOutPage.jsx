import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Container, Paper } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles for Toastify

const SignOutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the localStorage to log the user out
    alert("You have logged out successfully!");

    // Redirect the user to the login page after signing out
    navigate("/signin");
  }, [navigate]);



  return (
    <Container maxWidth="xs" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Signing Out...
        </Typography>
        <Typography variant="body1" align="center">
          You are being logged out. Redirecting to login page...
        </Typography>
      </Paper>
      </Container>
  );
};

export default SignOutPage;
