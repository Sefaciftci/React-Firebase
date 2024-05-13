import React, { useState } from "react";
import { questions } from "./data";
import BeforeQuiz from "./BeforeQuiz";
import AfterQuiz from "./AfterQuiz";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerClick = (answerScore) => {
    setScore(score + answerScore);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Tüm sorular cevaplandı, quiz bitti
      // İlgili bileşeni değiştir
      setQuizStarted(false);
    }
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="min-h-screen bg-purple-100 flex justify-center items-center ">
      <div className="bg-white w-[640px] rounded-xl py-6 px-9 shadow-2xl">
        <h1 className="text-center text-3xl text-purple-500 font-semibold mb-2 ">
          Quiz
        </h1>
        <hr className="mb-10" />

        {quizStarted ? (
          <>
            <div className="flex flex-col gap-3">
              <p className="text-xl ">
                {questions[currentQuestion].questionText}
              </p>
              <div className="flex flex-col gap-3 mt-4">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button
                      className="border-2 p-3 text-left rounded-xl text-lg hover:bg-purple-100 transation-all duration-500"
                      key={index}
                      onClick={() =>
                        handleAnswerClick(answerOption.answerScore)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
              <p className="text-gray mt-8 text-center">
                {currentQuestion + 1} of {questions.length} questions
              </p>
            </div>
            {currentQuestion === questions.length -1 && (
              <AfterQuiz score={score} />
            )}
          </>
        ) : (
          <BeforeQuiz onStartQuiz={handleStartQuiz} />
        )}
      </div>
    </div>
  );
};

export default Quiz;
