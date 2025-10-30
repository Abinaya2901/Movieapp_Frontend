import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieCard = ({ movie, toggleFavorite, isFavorite }) => {
  const [credits, setCredits] = useState({ cast: [], crew: [] });
  const TMDB_BASE_IMG = `https://image.tmdb.org/t/p/w300`;

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=468c96cd6229cdf95d40b1e691395cd2`
        );
        setCredits(res.data);
      } catch (error) {
        console.error("Error fetching credits:", error);
        setCredits({ cast: [], crew: [] });
      }
    };
    fetchCredits();
  }, [movie.id]);

  const actors = credits.cast.slice(0, 3).map((c) => c.name).join(", ") || "N/A";
  const directorObj = credits.crew.find((c) => c.job === "Director");
  const director = directorObj ? directorObj.name : "N/A";

  return (
    <div
      style={{
        width: "280px",
        margin: "10px",
        padding: "15px",
        background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
      }}
    >
      <img
        src={movie.poster_path ? `${TMDB_BASE_IMG}${movie.poster_path}` : "https://via.placeholder.com/300x450?text=No+Image"}
        alt={movie.title}
        style={{ width: "100%", borderRadius: "12px", marginBottom: "10px" }}
      />
      <h4 style={{ margin: "0 0 10px 0", color: "#333", fontSize: "18px" }}>{movie.title}</h4>
      <p style={{ margin: "5px 0", color: "#666", fontSize: "14px" }}>
        <strong>Release Date:</strong> {movie.release_date || "N/A"}
      </p>
      <p style={{ margin: "5px 0", color: "#666", fontSize: "14px" }}>
        <strong>Rating:</strong> {movie.vote_average} | <strong>Reviews:</strong> {movie.vote_count}
      </p>
      <p style={{ margin: "5px 0", color: "#666", fontSize: "14px" }}>
        <strong>Actors:</strong> {actors}
      </p>
      <p style={{ margin: "5px 0", color: "#666", fontSize: "14px" }}>
        <strong>Director:</strong> {director}
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(movie.id);
        }}
        style={{
          padding: "8px 16px",
          backgroundColor: isFavorite ? "#e91e63" : "#2196f3",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "14px",
          marginTop: "10px",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = isFavorite ? "#c2185b" : "#1976d2";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = isFavorite ? "#e91e63" : "#2196f3";
        }}
      >
        {isFavorite ? "♥ Favorited" : "♡ Add to Favorites"}
      </button>
    </div>
  );
};

export default MovieCard;
