import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import CartIcon from "../cart/CartIcon";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          MQ Store
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/ProductPage"></Button>
        <Button color="inherit" component={Link} to="/ProductDetail">
          Product Detail
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          <CartIcon />
        </Button>
        <Button color="inherit" component={Link} to="/DashboardPage">
          Dashboard Page
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
