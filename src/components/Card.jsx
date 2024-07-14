import { cardData } from "../cardData";
import '../styles/Card.css';

export default function Card({ id }) {
  return (
    <div className="card">
      <div className="gifDiv">
        <img src={cardData[id].image}/>
      </div>
      <h3>{cardData[id].title}</h3>
    </div>
  );
}