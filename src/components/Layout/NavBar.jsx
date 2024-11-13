import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CartIcon from "../cart/CartIcon";

const NavBar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    // Remove token and role from localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // Remove token and role from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("role");

      toast.success("You have logged out successfully!");

      // Redirect to the login page
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } else {
      // If there's no token, show the "already signed out" message
      toast.info("You are already signed out.");
    }
  };
  return (
    <>
      <AppBar position="sticky" sx={{ top: 0, backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            MQ Store
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/About">
            About
          </Button>
          <Button color="inherit" component={Link} to="/Contact">
            Contact
          </Button>

          <Button color="inherit" component={Link} to="/cart">
            <CartIcon />
          </Button>

          <Box sx={{ ml: 2 }}>
            <Button
              color="inherit"
              variant="outlined"
              component={Link}
              to="/register"
              sx={{ mx: 1, borderColor: "white", color: "white" }}
            >
              Register
            </Button>
            <Button
              color="secondary"
              variant="contained"
              component={Link}
              to="/signin"
              sx={{ mx: 1 }}
            >
              Sign In
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleSignOut}
              sx={{ mx: 1 }}
            >
              Sign Out
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <ToastContainer position="top-right" autoClose={2000} />{" "}
    </>
  );
};

export default NavBar;
