import React from "react";
import { Outlet } from "react-router-dom";
import SignInPage from "../pages/SignInPage";


const ProtectedRoute = () => {
  // Check localStorage for login status
  const isSignedIn = localStorage.getItem("loginStatus") === "true";

  return isSignedIn ? <Outlet /> : <SignInPage />;
};

export default ProtectedRoute;
