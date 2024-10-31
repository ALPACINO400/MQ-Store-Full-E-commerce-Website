import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";
import { ProductProvider } from "./Context/ProductContext";

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
          path: "/ProductDetail",
          element: <ProductDetail />,
        },
        {
          path: "/DashboardPage",
          element: <DashboardPage />,
        },
      ],
    },
  ]);
  return (
    <ProductProvider>
      <RouterProvider router={router} />;
    </ProductProvider>
  );
};

export default App;
