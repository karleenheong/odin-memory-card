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

export default function Gameboard() {
  // let clickedCards = [];

  const [toggle, setToggle] = useState(false);

  let nums = shuffleNums();

  const handleClick = () => {
    setToggle(!toggle);
    console.log('click');
  }

  return (
    <div className="gameboard">
      {nums.map((num) => 
        <Card id={num} key={num} onClick={handleClick}/>
      )}
    </div>
  );
}

