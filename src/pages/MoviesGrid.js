import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchFavorites } from '../api';

function FavoritesPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchFavorites().then(setMovies);
  }, []);
  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      <div className="movies-grid">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default FavoritesPage;