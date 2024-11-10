import { useContext } from "react";

import { CartContext } from "../Context/CartContext";


const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }

  return context;
};

export default useCart;
