import React from 'react';

function MovieDetail({ movie, onClose }) {
  if (!movie) return null;
  return (
    <div className="movie-detail-overlay" onClick={onClose}>
      <div className="movie-detail-content" onClick={e => e.stopPropagation()}>
        <img src={https://image.tmdb.org/t/p/w500${movie.poster_path}} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
        <p><strong>Actors:</strong> {movie.actors?.join(', ')}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Reviews:</strong> {movie.reviews}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default MovieDetail;