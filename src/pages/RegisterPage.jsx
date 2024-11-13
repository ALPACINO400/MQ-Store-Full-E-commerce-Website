import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createUser } from "../services/UserService";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    age: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateInput = () => {
    if (!formData.username?.trim()) return "Name is required";
    if (!formData.email?.includes("@")) return "Invalid email format";
    if (formData.password?.length < 6)
      return "Password must be at least 6 characters long";

    if (!formData.address?.trim()) return "Address is required";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setIsSubmitting(true);

    const validationError = validateInput();
    if (validationError) {
      setError(validationError);
      setIsSubmitting(false);
      return;
    }

    try {
      await createUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        address: formData.address,
        age: formData.age,
      });

      toast.success("User created successfully!");
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (err) {
      setError("Failed to create user. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <Container maxWidth="sm">
      <ToastContainer position="top-right" autoClose={2000} />
      <Box sx={{ mt: 5 }}>
        <Card sx={{ boxShadow: 3, p: 4, borderRadius: 2 }}>
          <CardContent>
            <Typography
              variant="h4"
              component="h1"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Create Account
            </Typography>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            {success && (
              <Alert severity="success" sx={{ mb: 2 }}>
                User created successfully!
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              {["username", "email", "password", "address", "age"].map(
                (field, index) => (
                  <TextField
                    key={field}
                    fullWidth
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    name={field}
                    type={field.includes("password") ? "password" : "text"}
                    value={formData[field]}
                    onChange={handleChange}
                    margin="normal"
                    required
                    sx={{
                      backgroundColor: "#f9f9f9",
                      borderRadius: 1,
                      "& .MuiInputBase-root": {
                        borderRadius: 1,
                      },
                    }}
                  />
                )
              )}
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
                {isSubmitting ? "Creating Account..." : "Register"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default RegisterPage;
