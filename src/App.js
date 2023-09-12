import Field from "./components/Field";
import { getField } from "./helpers/getField";
import "./App.css";
import { useState } from "react";
import { cloneDeep } from "lodash";
import { SHIP_TYPES } from "./constants";
import Stats from "./components/Stats";

function App() {
  const [field, setField] = useState(getField());
  const [ships, setShips] = useState(SHIP_TYPES);
  const [hits, setHits] = useState(0);

  const handleClick = (x, y) => {
    const copyField = cloneDeep(field);
    const value = field[x][y];
    if (value) {
      copyField[x][y] = "hit";
      setHits(hits + 1);
      const copyShips = cloneDeep(ships);
      const shipIndex = copyShips.findIndex((ship) => ship.id === value);
      if (shipIndex !== -1) {
        const ship = copyShips[shipIndex];
        ship.hits = ship.hits + 1;
        setShips(copyShips);
      }
    } else {
      copyField[x][y] = "miss";
    }
    setField(copyField);
  };

  const handleNewGame = () => {
    setShips(SHIP_TYPES);
    setHits(0);
    setField(getField());
  };

  return (
    <div className="app">
      {hits < 17 && (
        <>
          <Field field={field} onSquareClick={handleClick} />
          <Stats ships={ships} hits={hits} />
        </>
      )}
      {hits === 17 && (
        <table className={"emptyBattleField"}>
          <tbody>
            <tr>
              <td>
                <div className="text-center">
                  <h1>Game over</h1>
                  <button onClick={handleNewGame}>Start new game</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
