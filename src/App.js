import { useState } from 'react';

import { Square } from '../src/components';

export default () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleNextPlayer = () => {
    setXIsNext(!xIsNext);
    
    return xIsNext ? 'X' : 'O';
  }

  const handleClick = (index) => {
    if (squares[index] || handleWinner(squares)) return;

    const nextSquares = squares.slice();
    
    nextSquares[index] = handleNextPlayer();
    
    setSquares(nextSquares);
  }

  const winner = handleWinner(squares);
  let status;

  status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`; 

  return <>
    <div className='status'>
      {status}
    </div>

    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>

    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>

    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
  </>;
}

const handleWinner = (squares) => {
  const linesToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < linesToWin.length; i++) {
    const [a, b, c] = linesToWin[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
