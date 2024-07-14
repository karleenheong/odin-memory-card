import '../styles/Gameboard.css'
import '../styles/Gameboard.css';
import Card from './Card';

export default function Gameboard() {
  // const [selectedCard, setSelectedCard] = useState();
  // let clickedCards = [];

  return (
    <div className="gameboard">
      <Card id={0}/>
      <Card id={1}/>
      <Card id={2}/>
      <Card id={3}/>
      <Card id={4}/>
      <Card id={5}/>
      <Card id={6}/>
      <Card id={7}/>
      <Card id={8}/>
      <Card id={9}/>
      <Card id={10}/>
      <Card id={11}/>
    </div>
  );
}