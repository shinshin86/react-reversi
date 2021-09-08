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

      return null;
    },
    [squares]
  );

  const updateSquares = useCallback(
    (location, status) => {
      const reverse = (location, status) => {
        // const oppositeStatus = status === 1 ? 2 : 1;

        // left
        for (
          let i = location - 1, end = location - (location % 8), buf = [];
          i >= end;
          i--
        ) {
          if (!getSquare(i)) {
            break;
          }

          if (getSquare(i).status === 0) {
            break;
          }

          if (getSquare(i).status === status) {
            buf.forEach((b) => {
              b.status = status;
            });
            break;
          }

          buf.push(getSquare(i));
        }

        // right
        for (
          let i = location + 1, end = location + (7 - (location % 8)), buf = [];
          i <= end;
          i++
        ) {
          if (!getSquare(i)) {
            break;
          }

          if (getSquare(i).status === 0) {
            break;
          }

          if (getSquare(i).status === status) {
            buf.forEach((b) => {
              b.status = status;
            });
            break;
          }

          buf.push(getSquare(i));
        }

        // top
        for (let i = location - 8, buf = []; i >= 1; i -= 8) {
          if (!getSquare(i)) {
            break;
          }

          if (getSquare(i).status === 0) {
            break;
          }

          if (getSquare(i).status === status) {
            buf.forEach((b) => {
              b.status = status;
            });
            break;
          }

          buf.push(getSquare(i));
        }

        // bottom
        for (let i = location + 8, buf = []; i <= 64; i += 8) {
          if (!getSquare(i)) {
            break;
          }

          if (getSquare(i).status === 0) {
            break;
          }

          if (getSquare(i).status === status) {
            buf.forEach((b) => {
              b.status = status;
            });
            break;
          }

          buf.push(getSquare(i));
        }

        // top left
        for (let i = location - 9, buf = []; i >= 1; i -= 9) {
          if (!getSquare(i)) {
            break;
          }

          if (getSquare(i).status === 0) {
            break;
          }

          if (getSquare(i).status === status) {
            buf.forEach((b) => {
              b.status = status;
            });
            break;
          }

          buf.push(getSquare(i));
        }

        // bottom left
        for (let i = location + 7, buf = []; i <= 64; i += 7) {
          if (!getSquare(i)) {
            break;
          }

          if (getSquare(i).status === 0) {
            break;
          }

          if (getSquare(i).status === status) {
            buf.forEach((b) => {
              b.status = status;
            });
            break;
          }

          buf.push(getSquare(i));
        }

        // top right
        for (let i = location - 7, buf = []; i >= 1; i -= 7) {
          if (!getSquare(i)) {
            break;
          }

          if (getSquare(i).status === 0) {
            break;
          }

          if (getSquare(i).status === status) {
            buf.forEach((b) => {
              b.status = status;
            });
            break;
          }

          buf.push(getSquare(i));
        }

        // bottom right
        for (let i = location + 9, buf = []; i <= 64; i += 9) {
          if (!getSquare(i)) {
            break;
          }

          if (getSquare(i).status === 0) {
            break;
          }

          if (getSquare(i).status === status) {
            buf.forEach((b) => {
              b.status = status;
            });
            break;
          }

          buf.push(getSquare(i));
        }
      };

      const targetSquare = getSquare(location);
      targetSquare.status = status;

      reverse(+location, status);

      setSquares(JSON.parse(JSON.stringify(squares)));
    },
    [squares, getSquare]
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
