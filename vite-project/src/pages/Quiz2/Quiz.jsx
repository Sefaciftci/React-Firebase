import React, { useState } from 'react';
import data1 from './data1';

function Quiz({ onQuizComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerOptionClick = (answerScore) => {
    setScore(score + answerScore);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data1.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      onQuizComplete(score + answerScore);
    }
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="p-8 rounded-lg w-full max-w-xl">
      {!quizStarted ? (
        <div className="text-center">
          <button 
            onClick={handleStartQuiz}
            className='w-1/3  mt-5 py-3 border-2 border-purple-300 text-xl text-purple-600 hover:bg-purple-500 hover:text-white rounded-xl transition-all duration-500'
          >
            Başlat
          </button>
        </div>
      ) : showScore ? (
        <div className="text-2xl font-bold text-center">
          Testi Tamamladınız!
        </div>
      ) : (
        <>
          <div className="mb-8">
            <div className="text-xl">{data1[currentQuestion].questionText}</div>
            <hr className="m-4" />
          </div>
          <div className="space-y-4">
            {data1[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.answerScore)}
                className="w-full border border-purple-500 text-purple-600 text-xl  p-3 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-500"
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
          <div className="text-lg font-light mt-5  text-center">
              <span>{currentQuestion + 1}</span>/{data1.length}
            </div>
        </>
      )}
    </div>
  );
}

export default Quiz;