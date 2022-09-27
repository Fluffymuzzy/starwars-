import { useSelector } from "react-redux";
import Score from "../Score/Score";

function GameResults() {
  const { winner, score1, score2 } = useSelector((state) => state.players);

  const CurrentGameResults = () =>
    winner === "draw" ? (
      <div id="CurrentGameResults">Damn... no winner this time!</div>
    ) : (
      <div id="CurrentGameResults">Force came with... {winner} </div>
    );

  return (
    <div className="GameResults">
      {winner ? (
        <div>
          <CurrentGameResults />
          <div className="scores">
            <Score id="P1" count={score1} />
            <Score id="P2" count={score2} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default GameResults;
