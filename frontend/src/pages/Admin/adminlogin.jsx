import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { saveAdminToken } = useAuth();

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://your-backend-url.com/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        setLoading(false);
        setError("Invalid admin credentials.");
        return;
      }

      const data = await res.json();

      // Step 1: save temporary admin session token
      saveAdminToken(data.tempToken);

      // Step 2: start MFA flow
      navigate("/admin/mfa");

    } catch (err) {
      setError("Network error. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2 className="admin-login-title">Admin Login</h2>

        {error && <p className="admin-login-error">{error}</p>}

        <form onSubmit={handleSubmit} className="admin-login-form">

          <label className="admin-login-label">Username</label>
          <input
            className="admin-login-input"
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter username"
            required
          />

          <label className="admin-login-label">Password</label>
          <input
            className="admin-login-input"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />

          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
