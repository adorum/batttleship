import { SIZE, LAYOUT } from "../constants";

const getField = () => {
  let field = [SIZE];
  for (let i = 0; i < SIZE; i++) {
    field[i] = [SIZE];
    for (let j = 0; j < SIZE; j++) {
      field[i][j] = null;
    }
  }
  return setDefaultLayoyt(field);
};

const setDefaultLayoyt = (field) => {
  for (let i = 0; i < LAYOUT.length; i++) {
    const ship = LAYOUT[i];
    ship.positions.forEach((position) => {
      field[position[0]][position[1]] = ship.shipId;
    });
  }
  return field;
};

export { getField };
