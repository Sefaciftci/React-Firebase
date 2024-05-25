import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { PiHandsClappingDuotone } from "react-icons/pi";

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

  //info
  const handleInfocClick = () => {
    alert('Zinciri Kırma ?')
  }

  return (
    <div className="min-h-screen bg-purple-100 flex justify-center items-center font-mono">
      
      <div className="App">

      <div className="flex justify-between w-full items-center">
          <Link to="/">
            <IoArrowBackCircle className="text-3xl text-purple-600 font-bold" />
          </Link>
          <button className="text-2xl text-purple-600" onClick={handleInfocClick}><FaInfoCircle /></button>
        </div>

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
          {allCellsFilled && <h1 className="text-center text-3xl mt-8 flex items-center justify-center tracking-wide	 text-purple-500 font-semibold ">
            Başardın<PiHandsClappingDuotone className='ml-2'/>
          </h1>}
          <button className="bg-purple-500 text-white px-5 py-2.5 mt-6 rounded-xl hover:bg-purple-400 transition-all duration-500" onClick={handleReset}>
            Sıfırla
          </button>
        </div>
    </div>
  );
};

export default TicTac;
