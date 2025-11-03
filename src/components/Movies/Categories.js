import React, { useState, useEffect } from "react";
import axios from "axios";

const Categories = ({ selectIndustry }) => {
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://movieapp-backend-f6rz.onrender.com/api/categories")
      .then((res) => {
        setIndustries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setError("Unable to load movie industries. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ textAlign: "center", padding: "2rem" }}>Loading industries...</div>;
  if (error) return <div style={{ textAlign: "center", color: "red", padding: "2rem" }}>{error}</div>;

  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ color: "#333", marginBottom: "2rem" }}>Choose your Movie Industry</h3>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
        {industries.map((ind) => (
          <div
            key={ind}
            onClick={() => selectIndustry(ind)}
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              margin: "10px",
              padding: "30px 20px",
              borderRadius: "15px",
              width: "200px",
              textAlign: "center",
              cursor: "pointer",
              userSelect: "none",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s, box-shadow 0.2s",
              fontSize: "18px",
              fontWeight: "bold",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-5px)";
              e.target.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
          >
            {ind}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
