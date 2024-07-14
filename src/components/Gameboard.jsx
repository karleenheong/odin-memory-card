import { useState } from 'react';
import '../styles/Gameboard.css'
import Card from './Card';

function shuffleNums() {
  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let currentIndex = nums.length;
  // While there remain elements to shuffle...
  while(currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [nums[currentIndex], nums[randomIndex]] = [nums[randomIndex], nums[currentIndex]];
  }
  return nums;
}

export default function Gameboard({ score, setScore, bestScore, setBestScore }) {

  const [toggle, setToggle] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);

  let nums = shuffleNums();

  const handleClick = (id) => {
    if(!clickedCards.includes(id)) {
      setClickedCards([...clickedCards, id]);
      // console.log(clickedCards);
      setScore(score + 1);
      console.log(score);
    } else {
      if(score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setClickedCards([]);
    }
    setToggle(!toggle);
  }

  return (
    <div className="gameboard">
      {nums.map((num) => 
        <Card id={num} key={num} onClick={() => handleClick(num)}/>
      )}
    </div>
  );
}

