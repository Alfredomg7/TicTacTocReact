import React, { useState } from 'react';
import Board from './Board';
import SortToggle from './SortToggle';
import calculateWinner from './calculateWinner';

function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), location: null }]);
  const [currentMove, setCurrentMove] = useState(0);
  const [ascending, setAscending] = useState(true);
  const xIsNext = (currentMove % 2) === 0;
  const currentSquares = history[currentMove].squares;
  const boardSize = 3;

  function handlePlay(nextSquares, location) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, location: location }
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(step) {
    setCurrentMove(step);
  }

  function handleSquareClick(i) {
    if (currentSquares[i] || calculateWinner(currentSquares).winner) {
      return;
    }
    const nextSquares = currentSquares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';

    const location = {
      row: Math.floor(i / boardSize) + 1,
      col: (i % boardSize) + 1
    };

    handlePlay(nextSquares, location);
  }

  function handleNewGame() {
    setHistory([{ squares: Array(9).fill(null), location: null }]);
    setCurrentMove(0);
  }

  const { winner, winningLine } = calculateWinner(currentSquares);
  const isDraw = !winner && currentSquares.every(square => square !== null);
  const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? "It's a draw!"
    : `Next player: ${xIsNext ? 'X' : 'O'}`;
  
  const toggleSortOrder = () => {
    setAscending(!ascending);
  }

  const moves = (ascending ? history : [...history].reverse()).map((entry, index) => {
    const moveIndex = ascending ? index : history.length - 1 - index;
    const location = entry.location;
    const description = moveIndex > 0
      ? `Go to move #${moveIndex} (${location?.row}, ${location?.col})`
      : 'Go to game start';
  
    if (moveIndex === currentMove) {
      return <li key={moveIndex}>You are at move #{moveIndex} ({location?.row}, {location?.col})</li>;
    } else {
      return (
        <li key={moveIndex}>
          <button onClick={() => jumpTo(moveIndex)}>{description}</button>
        </li>
      );
    }
  });

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="game-board">
        <Board size={boardSize} squares={currentSquares} onSquareClick={handleSquareClick} winningLine={winningLine || []} />
      </div>
      <div className="game-info">
        <button className="new-game-btn" onClick={handleNewGame}>New Game</button>
        <SortToggle ascending={ascending} onToggle={toggleSortOrder} />
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;