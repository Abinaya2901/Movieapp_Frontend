import React from "react";
import MovieCard from "./Movies/MovieCard";

const Favorites = ({ favorites }) => (
  <div>
    <h3>[translate:Your Favorite Movies]</h3>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} toggleFavorite={() => {}} isFavorite />
      ))}
    </div>
  </div>
);

export default Favorites;
