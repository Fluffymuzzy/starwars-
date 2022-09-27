import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { peopleURL, starshipsURL } from "../../api";
import { setUpCards } from "../../app/cards/cardsReducer";
import { chooseWinner } from "../../app/players/playersReducer";
import { setUpList } from "../../app/swapiLists/swapiListsReducer";
import { battle } from "../../logic/logic";
import { ReactComponent as Loading } from "../../assets/LoadingGif.svg";
import Button from "../Button/Button";

function PlayActions() {
  const dispatch = useDispatch();
  const { people, starships } = useSelector((state) => state.swapiLists);
  const [disabled, setDisabled] = useState(true);
  const [errorInFetch, setErrorInFetch] = useState(false);

  useEffect(() => {
    function fetchData(url, resourceType, listOfData = []) {
      return fetch(url)
        .then((res) => res.json())
        .then((res) => {
          listOfData.push(...res.results);
          if (res.next) return fetchData(res.next, resourceType, listOfData);
          else dispatch(setUpList(resourceType, listOfData));
        });
    }
    Promise.all([
      fetchData(peopleURL, "people"),
      fetchData(starshipsURL, "starships"),
    ])
      .then(() => setDisabled(false))
      .catch((error) => setErrorInFetch(true));
  }, []);

  function game(list) {
    const { card1, card2, winner } = battle(list);
    dispatch(setUpCards(card1, card2));
    dispatch(chooseWinner(winner));
  }

  const GameDescription = () =>
    disabled ? (
      <div className="GameDescription">
        <p>Loading data...</p>
        <Loading />
      </div>
    ) : (
      <div className="GameDescription"> You must choose young padawan...</div>
    );

  const DisplayErr = () => (
    <div className="alert alert-danger">
      <p>Error! Please refresh the page.</p>
    </div>
  );

  return (
    <div className="PlayActions">
      {errorInFetch ? <DisplayErr /> : <GameDescription />}
      <div className="ButtonsArea">
        <Button
          id="playWithPeopleButton"
          className="play-button"
          callback={() => game(people)}
          text="Start battle! (People)"
          disabled={disabled}
        />
        <Button
          id="playWithStarshipsButton"
          className="play-button"
          callback={() => game(starships)}
          text="Start battle! (Starships)"
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default PlayActions;
