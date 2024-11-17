// import React, { useContext } from "react";
// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import CartIcon from "../cart/CartIcon";
// import { ProductContext } from "../../Context/ProductContext";

// const NavBar = () => {
//   const { setSearchValue } = useContext(ProductContext);
//   const navigate = useNavigate();

//   const handleHomeClick = () => {
//     setSearchValue(""); // Reset the search value
//     navigate("/"); // Navigate to the home page
//   };
//   const handleSignOut = () => {
//     // Remove token and role from localStorage
//     const token = localStorage.getItem("token");
//     if (token) {
//       // Remove token and role from localStorage
//       localStorage.removeItem("token");
//       localStorage.removeItem("role");

//       toast.success("You have logged out successfully!");

//       // Redirect to the login page
//       setTimeout(() => {
//         navigate("/signin");
//       }, 2000);
//     } else {
//       // If there's no token, show the "already signed out" message
//       toast.info("You are already signed out.");
//     }
//   };
//   return (
//     <>
//       <AppBar position="sticky" sx={{ top: 0, backgroundColor: "black" }}>
//         <Toolbar>
//           <Typography variant="h6" style={{ flexGrow: 1 }}>
//             MQ Store
//           </Typography>
//           <Button
//             color="inherit"
//             component={Link}
//             to="/"
//             onClick={handleHomeClick}
//           >
//             Home
//           </Button>
//           <Button color="inherit" component={Link} to="/About">
//             About
//           </Button>
//           <Button color="inherit" component={Link} to="/Contact">
//             Contact
//           </Button>

//           <Button color="inherit" component={Link} to="/cart">
//             <CartIcon />
//           </Button>

//           <Box sx={{ ml: 2 }}>
//             <Button
//               color="inherit"
//               variant="outlined"
//               component={Link}
//               to="/register"
//               sx={{ mx: 1, borderColor: "white", color: "white" }}
//             >
//               Register
//             </Button>
//             <Button
//               color="secondary"
//               variant="contained"
//               component={Link}
//               to="/signin"
//               sx={{ mx: 1 }}
//             >
//               Sign In
//             </Button>
//             <Button
//               color="secondary"
//               variant="contained"
//               onClick={handleSignOut}
//               sx={{ mx: 1 }}
//             >
//               Sign Out
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <ToastContainer position="top-right" autoClose={2000} />{" "}
//     </>
//   );
// };

// export default NavBar;
import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CartIcon from "../cart/CartIcon";
import { ProductContext } from "../../Context/ProductContext";

const NavBar = () => {
  const { setSearchValue } = useContext(ProductContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for sidebar
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setSearchValue(""); // Reset the search value
    navigate("/"); // Navigate to the home page
  };

  const handleSignOut = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");

      toast.success("You have logged out successfully!");
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } else {
      toast.info("You are already signed out.");
    }
  };

  const navItems = [
    { label: "Home", link: "/", onClick: handleHomeClick },
    { label: "About", link: "/About" },
    { label: "Contact", link: "/Contact" },
    { label: <CartIcon />, link: "/cart" },
  ];

  const authButtons = (
    <>
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
    </>
  );

  return (
    <>
      {/* AppBar */}
      <AppBar position="sticky" sx={{ top: 0, backgroundColor: "black" }}>
        <Toolbar>
          {/* Hamburger Menu Icon for Mobile */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            MQ Store
          </Typography>

          {/* Buttons for Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                component={Link}
                to={item.link}
                onClick={item.onClick}
              >
                {typeof item.label === "string" ? item.label : item.label}
              </Button>
            ))}
            {authButtons}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {navItems.map((item, index) => (
              <ListItem
                button
                key={index}
                component={Link}
                to={item.link}
                onClick={() => {
                  setIsDrawerOpen(false); // Close the drawer after navigation
                  if (item.onClick) item.onClick();
                }}
              >
                <ListItemText
                  primary={typeof item.label === "string" ? item.label : ""}
                />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box sx={{ textAlign: "center", p: 2 }}>{authButtons}</Box>
        </Box>
      </Drawer>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default NavBar;
