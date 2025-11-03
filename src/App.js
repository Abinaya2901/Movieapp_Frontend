import React, { useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/Navbar";
import Categories from "./components/Movies/Categories";
import Genres from "./components/Movies/Genres";
import MovieCard from "./components/Movies/MovieCard";
import Favorites from "./components/Favorites";

import axios from "axios";

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);
  const [showRegister, setShowRegister] = useState(true);
  const [industry, setIndustry] = useState(null);
  const [genre, setGenre] = useState(null);
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const apiUrl = "https://movieapp-backend-f6rz.onrender.com/api";

  useEffect(() => {
    if (authToken) {
      localStorage.setItem('authToken', authToken);
    } else {
      localStorage.removeItem('authToken');
    }
  }, [authToken]);



  useEffect(() => {
    if (industry && genre) {
      axios
        .post(
          `${apiUrl}/movies`,
          { industry, genre }
        )
        .then((res) => {
          setMovies(res.data);
        })
        .catch((err) => {
          console.error("Error fetching movies:", err);
        });
    }
  }, [genre, industry, authToken, apiUrl]);

  useEffect(() => {
    if (authToken) {
      axios
        .get(`${apiUrl}/favorites`, {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((res) => {
          setFavorites(res.data);
        })
        .catch((err) => {
          console.error("Error fetching favorites:", err);
        });
    }
  }, [authToken, apiUrl]);

  const handleLogout = () => {
    setAuthToken(null);
    setIndustry(null);
    setGenre(null);
    setMovies([]);
    setFavorites([]);
  };

  const goBackToCategories = () => {
    setIndustry(null);
    setGenre(null);
    setMovies([]);
  };

  const goBackToGenres = () => {
    setGenre(null);
    setMovies([]);
  };

  const toggleFavorite = (movieId) => {
    const isFav = favorites.includes(movieId);
    if (isFav) {
      axios
        .delete(
          `${apiUrl}/favorites`,
          {
            data: { movie_id: movieId },
            headers: { Authorization: `Bearer ${authToken}` },
          }
        )
        .then(() => setFavorites(favorites.filter((id) => id !== movieId)))
        .catch((err) => {
          console.error("Error removing favorite:", err);
        });
    } else {
      axios
        .post(
          `${apiUrl}/favorites`,
          { movie_id: movieId },
          { headers: { Authorization: `Bearer ${authToken}` } }
        )
        .then(() => setFavorites([...favorites, movieId]))
        .catch((err) => {
          console.error("Error adding favorite:", err);
        });
    }
  };

  if (!authToken) {
    return (
      <div>
        {showRegister ? (
          <div>
            <button
              onClick={() => setShowRegister(false)}
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                padding: "10px 20px",
                backgroundColor: "#2196f3",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Back to Login
            </button>
            <Register />
          </div>
        ) : (
          <div>
            <Login setAuth={setAuthToken} />
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <p style={{ color: "#666", fontSize: "16px" }}>
                Don't have an account?{" "}
                <button
                  onClick={() => setShowRegister(true)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#667eea",
                    cursor: "pointer",
                    fontSize: "16px",
                    textDecoration: "underline"
                  }}
                >
                  Register here
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <div style={{ padding: "1rem", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <h2 style={{ textAlign: "center", color: "#333", marginBottom: "2rem" }}>Enjoy and Have Fun!</h2>
        {!industry && <Categories selectIndustry={setIndustry} />}
        {industry && !genre && <Genres industry={industry} selectGenre={setGenre} goBack={goBackToCategories} />}
        {genre && (
          <div>
            <button onClick={goBackToGenres} style={{ marginBottom: "1rem", padding: "10px 20px", backgroundColor: "#2196f3", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Back to Genres</button>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  toggleFavorite={toggleFavorite}
                  isFavorite={favorites.includes(movie.id)}
                />
              ))}
            </div>
          </div>
        )}
        {favorites.length > 0 && (
          <div style={{ marginTop: "2rem" }}>
            <h3>Your Favorites</h3>
            <Favorites favorites={movies.filter(m => favorites.includes(m.id))} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
