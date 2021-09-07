import { useState, useEffect, useCallback } from 'react';
import './Reversi.css';

const range = (n) => [...Array(n).keys()];
const blockMap = { 0: '', 1: 'black', 2: 'white' };

const Reversi = () => {
  const [squares, setSquares] = useState([]);
  const [turnCount, setTunrCount] = useState(1);

  const getBlockStatus = (statusStr) => {
    switch (statusStr) {
      case 'black':
        return 1;
      case 'white':
        return 2;
      default:
        throw new Error('Invalid block status');
    }
  };

  const getSquare = useCallback(
    (location) => {
      let targetSquare;

      for (const rows of squares) {
        targetSquare = rows.find((row) => {
          return row.location === Number(location);
        });

        if (targetSquare) return targetSquare;
      }

      throw new Error('Not found target square');
    },
    [squares]
  );

  const updateSquares = useCallback(
    (location, status) => {
      const targetSquare = getSquare(location);
      targetSquare.status = status;

      setSquares(JSON.parse(JSON.stringify(squares)));
    },
    [squares]
  );

  const handleClick = useCallback(
    (e) => {
      const { location } = e.currentTarget.dataset;
      const statusStr = turnCount % 2 ? 'black' : 'white';
      updateSquares(location, getBlockStatus(statusStr));

      setTunrCount(turnCount + 1);
    },
    [turnCount, updateSquares]
  );

  useEffect(() => {
    let location = 1;
    const squareList = range(8).map((i) => {
      const row = [];

      range(8).forEach((_) => {
        // initialize
        if ([28, 37].includes(location)) {
          row.push({ status: 1, location });
        } else if ([29, 36].includes(location)) {
          row.push({ status: 2, location });
        } else {
          row.push({ status: 0, location });
        }

        location++;
      });

      return row;
    });

    setSquares(squareList);
  }, []);

  return (
    <div>
      <table>
        <tbody>
          {squares.map((rows, i) => (
            <tr key={'tr-' + i}>
              {rows.map((row, j) => (
                <td
                  className={blockMap[row.status]}
                  key={row.location}
                  data-location={row.location}
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
