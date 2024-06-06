import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { PiHandsClappingDuotone } from "react-icons/pi";

const TicTac = () => {
  // yerel depolamada daha önce kaydedilmiş bir tahta durumu olup olmadığını kontrol eder Eğer varsa, bu veriyi kullanır. Yoksa 3x7 boyutlarında boş bir tahta oluşturur.
  const initialBoard = () => {
    const savedBoard = localStorage.getItem("board");
    return savedBoard
      ? JSON.parse(savedBoard)
      : Array(3)
          .fill(null)
          .map(() => Array(7).fill(""));
  };

  // `board` adında bir durum değişkeni oluşturuyoruz ve başlangıç değerini `initialBoard` fonksiyonundan alıyoruz.
  const [board, setBoard] = useState(initialBoard);


  // `board` durum değişkeni her değiştiğinde yerel depolamayı güncelliyoruz.
  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(board));
  }, [board]);

  // Hücreye tıklama işlemi için bir fonksiyon tanımlıyoruz.
  const handleClick = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex] === "") {// Hücre boşsa işlem yapıyoruz.
      const newBoard = board.map((row, rIndex) =>
        row.map((cell, cIndex) =>
          rIndex === rowIndex && cIndex === colIndex ? "X" : cell
        )
      );// Tıklanan hücreyi 'X' ile güncelliyoruz.
      setBoard(newBoard); // `board` durumunu güncelliyoruz.
    }
  };

  // Tahtayı sıfırlamak için bir fonksiyon tanımlıyoruz.
  const handleReset = () => {
    const newBoard = Array(3)
      .fill(null)
      .map(() => Array(7).fill("")); // Boş bir tahta oluşturuyoruz.
    setBoard(newBoard); // `board` durumunu yeni boş tahtayla güncelliyoruz.
  };

  // Tüm hücrelerin dolu olup olmadığını kontrol eden bir değişken tanımlıyoruz.
  const allCellsFilled = board.flat().every((cell) => cell === "X");//flat iç içe dizileri tek dizi haline getirir

  // Her hücre için gün etiketi döndüren bir fonksiyon tanımlıyoruz.
  const getDayLabel = (rowIndex, colIndex) => {
    return `Gün ${rowIndex * 7 + colIndex + 1}`; // Gün etiketini hesaplıyoruz.
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
            <IoArrowBackCircle className="text-3xl text-purple-400 font-bold" />
          </Link>
          <button className="text-2xl text-purple-400" onClick={handleInfocClick}><FaInfoCircle /></button>
        </div>

          <h1 className="text-center text-4xl tracking-wide	 text-purple-400 font-semibold mb-10 ">
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
                    {cell === "" ? getDayLabel(rowIndex, colIndex) : cell}{/* Hücre boşsa gün etiketini, doluysa hücre içeriğini gösteriyoruz. */}
                  </div>
                ))}
              </div>
            ))}
          </div>
          {allCellsFilled && <h1 className="text-center text-3xl mt-8 flex items-center justify-center tracking-wide	 text-purple-500 font-semibold ">
            Başardın<PiHandsClappingDuotone className='ml-2'/>{/* Tüm hücreler doluysa tebrik mesajı gösteriyoruz. */}
          </h1>}
          <button className="border border-purple-300 text-purple-500 px-5 py-2.5 mt-6 rounded-xl hover:bg-purple-400 hover:text-white transition-all duration-500" onClick={handleReset}>
            Sıfırla
          </button>
        </div>
    </div>
  );
};

export default TicTac;
