import React from "react";
import { Badge, IconButton } from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import useCart from "../../hooks/useCart";

const CartIcon = () => {
  const { cart } = useCart();

  // Get the total number of items in the cart
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={itemCount} color="error">
        <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
      </Badge>
    </IconButton>
  );
};

export default CartIcon;
