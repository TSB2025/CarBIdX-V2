import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../../styles/auth.css";

export default function BuyerLogin() {
  const navigate = useNavigate();
  const { loginBuyer } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const success = await loginBuyer(form.email, form.password);

      if (success) {
        navigate("/buyer/dashboard");
      } else {
        setError("Invalid login credentials.");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Buyer Login</h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
          className="auth-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          required
          className="auth-input"
        />

        {error && <p className="auth-error">{error}</p>}

        <button type="submit" className="auth-button">
          Sign In
        </button>
      </form>
    </div>
  );
}
