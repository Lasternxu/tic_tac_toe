import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
      // what is the "key" attribute? (values that have been changed?) 
      // index as key?
    ))}
  </div>
);

export default Board;
