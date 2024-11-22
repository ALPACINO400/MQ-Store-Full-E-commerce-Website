import React, { useContext } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import ErrorPage from "./pages/ErrorPage";
import { ProductProvider } from "./Context/ProductContext";
import Cart from "./components/cart/Cart";
import { CartProvider } from "./Context/CartContext";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";
import DashboardPage from "./pages/DashboardPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignOutPage from "./pages/SignOutPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/HomePage",
          element: <HomePage />,
        },
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Contact",
          element: <Contact />,
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
        {
          path: "/signout",
          element: <SignOutPage />,
        },
      ],
    },
  ]);
  return (
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
