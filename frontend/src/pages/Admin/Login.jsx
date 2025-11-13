import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Input from "../../components/forms/Input";
import Button from "../../components/ui/Button";

const AdminLogin = () => {
  const { adminLogin, loading, error } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await adminLogin(form.email, form.password);
  };

  return (
    <main className="page auth-page">
      <section className="auth-card">
        <h1>Admin console</h1>
        <p className="auth-subtitle">
          Restricted access. Activity is logged and monitored.
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <Input
            label="Admin email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <Button type="submit" disabled={loading}>
            {loading ? "Checking access..." : "Enter console"}
          </Button>
        </form>
      </section>
    </main>
  );
};

export default AdminLogin;
