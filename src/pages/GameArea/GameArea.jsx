import PlayActions from "../../components/PlayActions/PlayActions";
import GameResults from "../../components/GameResults/GameResults";
import CardsArea from "../../components/CardsArea/CardsArea";

function GameArea() {
  return (
    <div className="GameArea">
      <PlayActions />
      <GameResults />
      <CardsArea />
    </div>
  );
}

export default GameArea;
