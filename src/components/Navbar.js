import React from "react";

const Navbar = ({ onLogout }) => (
  <nav
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    }}
  >
    <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>MovieApp</h2>
    <button
      onClick={onLogout}
      style={{
        backgroundColor: "#dc143c",
        border: "none",
        borderRadius: "8px",
        padding: "0.5rem 1rem",
        color: "white",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        transition: "background-color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#b22222";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "#dc143c";
      }}
    >
      Logout
    </button>
  </nav>
);

export default Navbar;
