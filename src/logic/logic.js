function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

export function battle(list) {
  const randomNum1 = getRandomNumber(list.length);
  const randomNum2 = getRandomNumber(list.length);
  const card1 = list[randomNum1];
  const card2 = list[randomNum2];

  let attr1, attr2;
  if (Object.keys(card1).includes("mass")) {
    attr1 = card1.mass;
    attr2 = card2.mass;
  } else {
    attr1 = card1.crew;
    attr2 = card2.crew;
  }

  if (attr1 === "unknown" || attr2 === "unknown" || attr1 === attr2) {
    return { card1, card2, winner: "draw" };
  } else if (parseFloat(attr1) > parseFloat(attr2)) {
    return { card1, card2, winner: "P1" };
  } else if (parseFloat(attr1) < parseFloat(attr2)) {
    return { card1, card2, winner: "P2" };
  }
}
