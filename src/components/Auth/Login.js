import React, { useState } from "react";
import { login } from "../../api";

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const result = await login(email, password);
    setMsg(result.message);
    if (result.success) {
      setAuth(result.token);
    }
    setLoading(false);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center"
      }}>
        <h2 style={{
          marginBottom: "30px",
          color: "#333",
          fontSize: "28px",
          fontWeight: "bold"
        }}>Welcome Back</h2>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "15px",
              border: "2px solid #ddd",
              borderRadius: "8px",
              fontSize: "16px",
              marginBottom: "15px",
              boxSizing: "border-box",
              transition: "border-color 0.3s",
              outline: "none"
            }}
            onFocus={(e) => e.target.style.borderColor = "#667eea"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "15px",
              border: "2px solid #ddd",
              borderRadius: "8px",
              fontSize: "16px",
              marginBottom: "20px",
              boxSizing: "border-box",
              transition: "border-color 0.3s",
              outline: "none"
            }}
            onFocus={(e) => e.target.style.borderColor = "#667eea"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
        </div>
        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: "100%",
            padding: "15px",
            background: loading ? "#ccc" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
            marginBottom: "20px"
          }}
          onMouseEnter={(e) => {
            if (!loading) {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
            }
          }}
          onMouseLeave={(e) => {
            if (!loading) {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        {msg && (
          <p style={{
            color: msg.includes("successful") ? "#4caf50" : "#f44336",
            margin: "0",
            fontSize: "14px",
            fontWeight: "bold"
          }}>
            {msg}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
