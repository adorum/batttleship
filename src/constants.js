import carrierIcon from "./assets/Carrier Shape.png";
import battleShipIcon from "./assets/Battleship Shape.png";
import cruiserIcon from "./assets/Cruiser Shape.png";
import submarineIcon from "./assets/Submarine Shape.png";
import aircraftIcon from "./assets/Aircraft Shape.png";

const SIZE = 10;

const SHIP_TYPES = [
  { id: 1, size: 5, count: 1, hits: 0, img: carrierIcon },
  {
    id: 2,
    size: 4,
    count: 1,
    hits: 0,
    img: battleShipIcon,
  },
  { id: 3, size: 3, count: 1, hits: 0, img: cruiserIcon },
  { id: 4, size: 3, count: 1, hits: 0, img: submarineIcon },
  { id: 5, size: 2, count: 1, hits: 0, img: aircraftIcon },
];

const LAYOUT = [
  {
    shipId: 1,
    positions: [
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
      [6, 9],
    ],
  },
  {
    shipId: 2,
    positions: [
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
    ],
  },
  {
    shipId: 3,
    positions: [
      [8, 1],
      [8, 2],
      [8, 3],
    ],
  },
  {
    shipId: 4,
    positions: [
      [3, 0],
      [3, 1],
      [3, 2],
    ],
  },
  {
    shipId: 5,
    positions: [
      [0, 0],
      [1, 0],
    ],
  },
];

export { SIZE, LAYOUT, SHIP_TYPES };
