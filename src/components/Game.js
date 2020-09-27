import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";

const Game = () => {
  // learn more about "setxxx" usage
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNum, setStepNum] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNum]);
  const xO = xIsNext ? "X" : "O"; 

  const handleClick = (i) => { // i := the index of the square 
    const historyPoint = history.slice(0, stepNum + 1);
    const current = historyPoint[stepNum];
    const squares = [...current]; // ... fill out the things automatically
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNum(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => { // jumpto previous history "cheating!"
    setStepNum(step);
    setXisNext(step % 2 === 0); // X, O, X, O, ...
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return ( // which step you want to go to is stored in key
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <br></br>
      <h1>React Tic Tac Toe - With Hooks</h1>
      <br></br>
      <h3>{winner ? "Winner: " + winner : (stepNum === 9 ? "Tied!" : "Next Player: " + xO)}</h3>
      <br></br>
      <Board squares={history[stepNum]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <br></br>
          <h3>History</h3>
          <br></br>
          {renderMoves()}
        </div>
      </div>
    </>
  );
};

export default Game;