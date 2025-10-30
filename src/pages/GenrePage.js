const genres = [
  { name: 'Action', icon: '🔥' },
  { name: 'Comedy', icon: '😂' },
  { name: 'Romance', icon: '❤' },
  { name: 'Drama', icon: '🎭' },
  // Add/modify as needed
];

function GenrePage({ onSelectGenre }) {
  return (
    <div className="genre-page">
      <h2>Select Genre</h2>
      <div className="genre-list">
        {genres.map(g => (
          <div key={g.name} className="genre-card" onClick={() => onSelectGenre(g.name)}>
            <span style={{ fontSize: '2em' }}>{g.icon}</span>
            <p>{g.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenrePage;