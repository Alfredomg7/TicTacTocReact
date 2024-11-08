import React from 'react';
import Square from './Square';

function Board({ size, squares, onSquareClick, winningLine = [] }) {
  function renderSquares() {
    return Array.from({ length: size }).map((_, row) => (
      <div key={row} className="board-row">
        {Array.from({ length: size }).map((_, col) => {
          const index = row * size + col;
          return (
            <Square
              key={index}
              value={squares[index]}
              onSquareClick={() => onSquareClick(index)}
              highlight={winningLine.includes(index)}
            />
          );
        })}
      </div>
    ));
  }

  return <>{renderSquares()}</>;
}

export default Board;