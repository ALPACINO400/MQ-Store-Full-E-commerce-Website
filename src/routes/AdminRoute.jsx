import React from "react";
import { Outlet } from "react-router-dom";
import SignInPage from "../pages/SignInPage";

const AdminRoute = () => {
  // api call
  // redux-store ->user login or not?
  const isSignedIn = localStorage.getItem("loginStatus") === "true";
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.isAdmin || false;

  return isSignedIn && isAdmin ? <Outlet /> : <SignInPage />;
};

export default AdminRoute;
