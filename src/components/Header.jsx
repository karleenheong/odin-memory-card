import '../styles/Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='gameNameDiv'>
        <h1 className='gameName'>Disaster Memory Game</h1>
      </div>
      <div className="scoreboardDiv">
        <h2 className="scoreboardText">Score: 0</h2>
        <h2 className="scoreboardText">Best Score: 0</h2>
      </div>
    </div>
  );
}