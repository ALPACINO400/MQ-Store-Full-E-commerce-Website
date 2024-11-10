import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "fahad@gmail.com",
    password: "123456",
  });

    const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5125/api/v1/auth/login",
        formData
      );

      const token = response.data.token;
      const usetoke = jwtDecode(token);
console.log(usetoke)
      localStorage.setItem("token", token); // Save the token in localStorage
      localStorage.setItem("role", usetoke.role); // Save the token in localStorage
if (usetoke.role === "Admin") {
  navigate("/DashboardPage");
}
else{
        alert("Logged in successfully");
}
    } catch (error) {
      alert(
        `Error: ${
          error.response?.data?.message || "An unexpected error occurred"
        }`
      );
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignInPage;
