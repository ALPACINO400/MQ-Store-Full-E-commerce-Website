import React, { useContext } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";
import { ProductProvider } from "./Context/ProductContext";
import Cart from "./components/cart/Cart";
import { CartProvider } from "./Context/CartContext";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/ProductPage",
          element: <ProductPage />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/products/:productId",
          element: <ProductDetail />,
        },
        {
          path: "/DashboardPage",
          element: <DashboardPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/signin",
          element: <SignInPage />,
        },
      ],
    },
  ]);
  return (
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router} />;
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
