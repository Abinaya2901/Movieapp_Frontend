const regions = [
  { name: 'Hollywood', country: 'USA', color: '#FF5733' },
  { name: 'Bollywood', country: 'India', color: '#E91E63' },
  { name: 'Tollywood', country: 'India', color: '#FF9800' },
  { name: 'Kollywood', country: 'India', color: '#8BC34A' },
  { name: 'Chinese Cinema', country: 'China', color: '#F44336' },
  { name: 'J-Cinema', country: 'Japan', color: '#2196F3' },
  { name: 'Korean Cinema', country: 'South Korea', color: '#00BCD4' },
  { name: 'Nollywood', country: 'Nigeria', color: '#4CAF50' },
  { name: 'Lollywood', country: 'Pakistan', color: '#3F51B5' },
  { name: 'Yesilçam', country: 'Turkey', color: '#607D8B' },
  { name: 'French Cinema', country: 'France', color: '#9C27B0' },
  { name: 'British Film Industry', country: 'UK', color: '#673AB7' },
  { name: 'German Cinema', country: 'Germany', color: '#FFC107' },
  { name: 'Brazilian Cinema', country: 'Brazil', color: '#009688' },
  { name: 'Argentine Cinema', country: 'Argentina', color: '#BDBDBD' },
  { name: 'Russian Cinema', country: 'Russia', color: '#FFEB3B' },
  { name: 'Mexican Cinema', country: 'Mexico', color: '#795548' },
];

function Home({ onSelectRegion }) {
  return (
    <div className="home-page">
      <h1>CineWorld Explorer</h1>
      <div className="region-row">
        {regions.map(r => (
          <div
            key={r.name}
            className="region-box"
            style={{ backgroundColor: r.color, cursor: 'pointer' }}
            onClick={() => onSelectRegion(r.name)}
          >
            <h3>{r.name}</h3>
            <p>{r.country}</p>
          </div>
        ))}
      </div>
      <footer>Enjoy your movies! Grab some popcorn and have fun 🎬</footer>
    </div>
  );
}

export default Home;