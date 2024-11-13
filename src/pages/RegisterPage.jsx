import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://sda-3-onsite-backend-teamwork-gs0y.onrender.com/api/v1/auth/register",
        formData
      );
      alert("User created successfully");
      console.log(response.data);
    } catch (error) {
      alert(
        `Error: ${
          error.response?.data?.message || "An unexpected error occurred"
        }`
      );
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Username"
              name="username"
              variant="outlined"
              value={formData.username}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
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
            />
            <TextField
              label="Address"
              name="address"
              variant="outlined"
              value={formData.address}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Age"
              type="number"
              name="age"
              variant="outlined"
              value={formData.age}
              onChange={handleChange}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2, backgroundColor:"black"}}
              
            >
              Register
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
