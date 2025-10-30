import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    // Replace with real API call:
    if (email && password) {
      setIsAuthenticated(true);
      navigate("/categories");
    }
  }

  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(#f8f9fa, #e9ecef)",
    }}>
      <form onSubmit={handleLogin} style={{
        boxShadow: "0 2px 12px #ccc",
        borderRadius: "8px",
        padding: "2em",
        background: "#fff",
        width: "300px",
        textAlign: "center",
      }}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ margin: "1em 0", padding: "0.5em", width: "90%" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ margin: "1em 0", padding: "0.5em", width: "90%" }}
        />
        <button type="submit" style={{
          background: "#007bff",
          color: "#fff",
          border: "none",
          padding: "0.7em 1.5em",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "1em",
        }}>
          Login
        </button>
      </form>
    </div>
  );
}