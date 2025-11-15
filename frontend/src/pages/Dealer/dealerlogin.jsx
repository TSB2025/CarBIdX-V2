/* BEGIN: DealerLogin.jsx */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DealerLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/dealer/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("dealerToken", data.token);

      navigate("/dealer/dashboard");
    } catch (err) {
      setError("Network error. Try again.");
    }
  }

  return (
    <div className="auth-container">
      <h1 className="auth-title">Dealer Login</h1>

      {error && <p className="auth-error">{error}</p>}

      <form className="auth-form" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your dealer email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth-btn">
          Sign In
        </button>
      </form>

      <p className="auth-footer">
        Need an account?  
        <a href="/dealer/register">Sign Up</a>
      </p>
    </div>
  );
}
/* END: DealerLogin.jsx */
