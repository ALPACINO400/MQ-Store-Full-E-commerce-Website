import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoToHomePage = () => {
    navigate("/");
  };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, Page not found</p>
      <p>
        <em>{error.statusText || error.message}</em>
      </p>
      <button onClick={handleGoToHomePage}>Go to Home Page </button>
    </div>
  );
}
