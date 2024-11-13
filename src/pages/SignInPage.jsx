import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
  Divider,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "ma@gmail.com",
    password: "123moh",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://sda-3-onsite-backend-teamwork-gs0y.onrender.com/api/v1/auth/login",
        formData
      );

      const token = response.data.token;
      const usetoke = jwtDecode(token);
      console.log(usetoke);
      localStorage.setItem("token", token); // Save the token in localStorage
      localStorage.setItem("role", usetoke.role); // Save the token in localStorage

      toast.success("Logged in successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
      setTimeout(() => {
        if (usetoke.role === "Admin") {
          navigate("/DashboardPage");
        } else {
          navigate("/");
        }
      }, 2000); // Delay of 2 seconds for navigation
    } catch (error) {
      // Show error toast
      toast.error(
        `Error: ${
          error.response?.data?.message ||
          "Your email or password is incorrect."
        }`,
        {
          position: "top-right",
          autoClose: 2000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Container maxWidth="xs" sx={{ marginTop: 6 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome Back!
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Please sign in to continue
        </Typography>
        <Divider sx={{ my: 2 }} />

        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Email"
              type="email"
              name="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              sx={{ backgroundColor: "#f9f9f9" }}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
              sx={{ backgroundColor: "#f9f9f9" }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bold",
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing  to your Account..." : "sigin in"}
            </Button>
          </Box>
        </form>
      </Paper>
      <ToastContainer />
    </Container>
  );
};

export default SignInPage;
