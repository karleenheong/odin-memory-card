import '../styles/Header.css';

export default function Header({ score, bestScore }) {

  return (
    <div className='header'>
      <div className='gameNameDiv'>
        <h1 className='gameName'>Disaster Memory Game</h1>
        <p className='gameDescription'>{`Get points by clicking on an image but don't click on any more than once!`}</p>
      </div>
      <div className="scoreboardDiv">
        <h2 className="scoreboardText">{`Score: ${score}`}</h2>
        <h2 className="scoreboardText">{`Best Score: ${bestScore}`}</h2>
      </div>
    </div>
  );
}