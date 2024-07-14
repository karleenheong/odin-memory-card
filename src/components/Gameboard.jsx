import '../styles/Gameboard.css'
// import { cardData } from '../cardData';
import '../styles/Gameboard.css';
import Card from './Card';

// function Card({ id }) {
//   return (
//     <div className="card">
//       <img src={cardData[id].image}/>
//       <h3>{cardData[id].title}</h3>
//     </div>
//   );
// }

export default function Gameboard() {
  return (
    <div className="gameboard">
      <Card id={0}/>
      <Card id={1}/>
      <Card id={2}/>
    </div>
  );
}