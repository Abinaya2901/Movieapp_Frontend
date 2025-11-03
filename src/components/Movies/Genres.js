import React, { useState, useEffect } from "react";
import axios from "axios";

const Genres = ({ industry, selectGenre, goBack }) => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (industry) {
      setLoading(true);
      setError(null);
      axios.get(`https://movieapp-backend-f6rz.onrender.com/api/genres/${industry}`)
        .then((res) => {
          setGenres(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching genres:", err);
          setError("Unable to load genres. Please try again later.");
          setLoading(false);
        });
    }
  }, [industry]);

  if (!industry) return null;
  if (loading) return <div style={{ textAlign: "center", padding: "2rem" }}>Loading genres...</div>;
  if (error) return <div style={{ textAlign: "center", color: "red", padding: "2rem" }}>{error}</div>;

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={goBack} style={{ marginBottom: "1rem", padding: "10px 20px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Back to Industries</button>
      <h3 style={{ color: "#333", marginBottom: "2rem" }}>Pick a Genre for {industry}</h3>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
        {genres.map((genre) => (
          <div
            key={genre}
            onClick={() => selectGenre(genre)}
            style={{
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              color: "white",
              margin: "10px",
              padding: "25px 15px",
              borderRadius: "12px",
              width: "180px",
              textAlign: "center",
              cursor: "pointer",
              userSelect: "none",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s, box-shadow 0.2s",
              fontSize: "16px",
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
            {genre}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
