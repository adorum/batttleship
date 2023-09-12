import React from "react";
import Square from "./Square";

const Field = (props) => {
  const { field, onSquareClick } = props;
  return (
    <div className="field">
      <table>
        <tbody>
          {field.map((row, x) => {
            return (
              <tr key={x}>
                {row.map((column, y) => {
                  return (
                    <td key={y}>
                      <Square
                        onClick={() => onSquareClick(x, y)}
                        x={x}
                        y={y}
                        state={column}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Field;
