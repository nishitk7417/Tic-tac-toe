import React, { useState } from 'react'
import Cell from './Cell';
import findWinner from './FindWinner';


export default function GameBoard() {
    const [isXNext, setIsXNext] = useState(true);
    const [cells, setCells] = useState(Array(9).fill(null));

    function handleCellClick(i){
      if (findWinner(cells) || cells[i]) {
        return;
      }
      const nextCells = cells.slice();
      nextCells[i] = isXNext ? 'X' : 'O';
      setCells(nextCells);
      setIsXNext(!isXNext);
    }

    const winner = findWinner(cells);
  let statusMessage;
  if (winner) {
    statusMessage = 'Winner: ' + winner;
  } else {
    statusMessage = 'Next player: ' + (isXNext ? 'X' : 'O');
  }

  function resetGame() {
    setCells(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div className="game-board">
      <div className='heading'>Tic-tac-toe</div>
      <div className="board-row">
        <Cell value={cells[0]} onCellClick={() => handleCellClick(0)} />
        <Cell value={cells[1]} onCellClick={() => handleCellClick(1)} />
        <Cell value={cells[2]} onCellClick={() => handleCellClick(2)} />
      </div>
      <div className="board-row">
        <Cell value={cells[3]} onCellClick={() => handleCellClick(3)} />
        <Cell value={cells[4]} onCellClick={() => handleCellClick(4)} />
        <Cell value={cells[5]} onCellClick={() => handleCellClick(5)} />
      </div>
      <div className="board-row">
        <Cell value={cells[6]} onCellClick={() => handleCellClick(6)} />
        <Cell value={cells[7]} onCellClick={() => handleCellClick(7)} />
        <Cell value={cells[8]} onCellClick={() => handleCellClick(8)} />
      </div>
      <div className='bottom'>
      <div className="status">{statusMessage}</div>
      <button className="reset-button" onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  )
}
