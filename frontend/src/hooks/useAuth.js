---BEGIN CODE---
// frontend/src/hooks/useAuth.js

import { useState } from "react";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function login(email, password) {
    setLoading(true);
    setError("");

    try {
      // Temporary mock logic so UI works
      await new Promise((res) => setTimeout(res, 700));

      if (!email || !password) {
        throw new Error("Missing email or password");
      }

      // Simulate success
      localStorage.setItem("cbx_user_role", "buyer");
      return true;

    } catch (err) {
      setError("Invalid credentials");
      return false;

    } finally {
      setLoading(false);
    }
  }

  async function dealerLogin(email, password) {
    setLoading(true);
    setError("");

    try {
      await new Promise((res) => setTimeout(res, 700));

      if (!email || !password) {
        throw new Error("Missing email or password");
      }

      localStorage.setItem("cbx_user_role", "dealer");
      return true;

    } catch (err) {
      setError("Invalid dealer credentials");
      return false;

    } finally {
      setLoading(false);
    }
  }

  async function adminLogin(email, password) {
    setLoading(true);
    setError("");

    try {
      await new Promise((res) => setTimeout(res, 700));

      if (!email || !password) {
        throw new Error("Missing email or password");
      }

      localStorage.setItem("cbx_user_role", "admin");
      return true;

    } catch (err) {
      setError("Invalid admin credentials");
      return false;

    } finally {
      setLoading(false);
    }
  }

  return {
    login,
    dealerLogin,
    adminLogin,
    loading,
    error,
  };
}
---END CODE---
