import React, { useState } from "react";
import { register } from "../../api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    const result = await register(email, password);
    setMsg(result.message);
    setLoading(false);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
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
        }}>Create Account</h2>
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
            onFocus={(e) => e.target.style.borderColor = "#f5576c"}
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
            onFocus={(e) => e.target.style.borderColor = "#f5576c"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
        </div>
        <button
          onClick={handleRegister}
          disabled={loading}
          style={{
            width: "100%",
            padding: "15px",
            background: loading ? "#ccc" : "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
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
          {loading ? "Registering..." : "Register"}
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

export default Register;
