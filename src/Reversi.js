import { useState, useEffect } from 'react';
import './Reversi.css';

const range = (n) => [...Array(n).keys()];
const blockMap = { 0: '', 1: 'black', 2: 'white' };

const Reversi = () => {
  const [squares, setSquare] = useState([]);

  useEffect(() => {
    let number = 1;
    const squareList = range(8).map((i) => {
      const row = [];

      range(8).forEach((_) => {
        // initialize
        if ([28, 37].includes(number)) {
          row.push({ status: 1, number });
        } else if ([29, 36].includes(number)) {
          row.push({ status: 2, number });
        } else {
          row.push({ status: 0, number });
        }

        number++;
      });

      return row;
    });

    setSquare(squareList);
  }, []);

  const handleClick = (e) => {
    console.log(e.currentTarget.dataset.location);
  };

  return (
    <div>
      <table>
        <tbody>
          {squares.map((rows, i) => (
            <tr key={'tr-' + i}>
              {rows.map((row, j) => (
                <td
                  className={blockMap[row.status]}
                  key={row.number}
                  data-location={row.number}
                  onClick={handleClick}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reversi;
