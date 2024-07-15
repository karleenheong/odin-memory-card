import { useState, useEffect } from "react";
import { cardData } from "../cardData";
import '../styles/Card.css';

export default function Card({ id, ...buttonProps }) {
  const [gif, setGif] = useState(null);
  const gifId = cardData[id].gifId;

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/${gifId}?api_key=gKnDj7gTSSJLIH8DHjOpl6QHRk80I5sj&rating=g`, {mode: 'cors'});
        const gifData = await response.json();
        const link = gifData.data.images.original.url;
        setGif(link);
      } catch(e) {
        console.log('could not load gif');
      }
    };

    fetchData();
    return () => {

    }
  }, [gifId]);

  return (
    <button className="card" {...buttonProps}>
      <div className="gifDiv">
        <img className="gifImg" src={gif}/>
      </div>
      <h3>{cardData[id].title}</h3>
    </button>
  );
}