import { useState, useEffect } from 'react';
import './Reversi.css';

const range = (n) => [...Array(n).keys()];
const blockMap = { 0: '', 1: 'black', 2: 'white' };

const Reversi = () => {
  const [squares, setSquare] = useState([]);

  useEffect(() => {
    const squareList = range(8).map((i) => {
      const row = [];

      range(8).forEach((j) => {
        row.push(0);
      });

      return row;
    });

    // initialize
    squareList[3][3] = 1;
    squareList[3][4] = 2;
    squareList[4][3] = 2;
    squareList[4][4] = 1;

    setSquare(squareList);
  }, []);

  return (
    <div>
      <table>
        <tbody>
          {squares.map((rows, i) => (
            <tr key={'tr-' + i}>
              {rows.map((row, j) => (
                <td className={blockMap[row]} key={`td-${i}-${j}`}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reversi;
