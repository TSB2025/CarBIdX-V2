import { useState } from "react";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";
import "./../styles/layout.css";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = (e) => {
    e.preventDefault();
    console.log("Admin login submitted");
  };

  return (
    <div className="page">
      <h2>Admin Access</h2>

      <form className="form-box" onSubmit={handleAdminLogin}>
        <InputField
          label="Admin Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit" label="Login" />
      </form>
    </div>
  );
}


export default AdminLogin;
