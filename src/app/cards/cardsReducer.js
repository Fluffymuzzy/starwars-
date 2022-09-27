const initialState = {
  card1: {},
  card2: {},
};

export function setUpCards(card1, card2) {
  return {
    type: "SET_UP_CARDS",
    payload: { card1, card2 },
  };
}

export function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_UP_CARDS":
      return {
        card1: action.payload.card1,
        card2: action.payload.card2,
      };
    default:
      return state;
  }
}
