import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";


const TicTac = () => {
  const initialBoard = () => {
    const savedBoard = localStorage.getItem("board");
    return savedBoard
      ? JSON.parse(savedBoard)
      : Array(3)
          .fill(null)
          .map(() => Array(7).fill(""));
  };

  const [board, setBoard] = useState(initialBoard);

  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(board));
  }, [board]);

  const handleClick = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex] === "") {
      const newBoard = board.map((row, rIndex) =>
        row.map((cell, cIndex) =>
          rIndex === rowIndex && cIndex === colIndex ? "X" : cell
        )
      );
      setBoard(newBoard);
    }
  };

  const handleReset = () => {
    const newBoard = Array(3)
      .fill(null)
      .map(() => Array(7).fill(""));
    setBoard(newBoard);
  };

  const allCellsFilled = board.flat().every((cell) => cell === "X");

  const getDayLabel = (rowIndex, colIndex) => {
    return `Day ${rowIndex * 7 + colIndex + 1}`;
  };

  return (
    <div className="min-h-screen bg-purple-100 flex justify-center items-center font-mono">

      <div className="App">
          <h1 className="text-center text-4xl tracking-wide	 text-purple-500 font-semibold mb-10 ">
            Zinciri Kırma
          </h1>

          <div className="board">
            {board.map((row, rowIndex) => (
              <div key={rowIndex} className="row">
                {row.map((cell, colIndex) => (
                  <div
                    key={colIndex}
                    className={`cell ${cell}`}
                    onClick={() => handleClick(rowIndex, colIndex)}
                  >
                    {cell === "" ? getDayLabel(rowIndex, colIndex) : cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
          {allCellsFilled && <h1 className="text-center text-3xl mt-8 tracking-wide	 text-purple-500 font-semibold ">
            Başardın!
          </h1>}
          <button className="bg-purple-500 text-white px-5 py-2.5 mt-6 rounded-xl hover:bg-purple-400 transition-all duration-500" onClick={handleReset}>
            Sıfırla
          </button>
        </div>
    </div>
  );
};

export default TicTac;
