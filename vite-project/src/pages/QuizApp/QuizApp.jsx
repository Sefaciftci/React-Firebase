import React, { useState } from 'react';
import { questions } from './data';
import BeforeQuiz from './BeforeQuiz';
import AfterQuiz from './AfterQuiz';
import { goals1 } from './goals1';
import { goals2 } from './goals2';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizStarted, setQuizStarted] = useState(false);
    const [quizFinished, setQuizFinished] = useState(false);

    const handleAnswerClick = (answerScore) => {
        setScore(score + answerScore);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setQuizFinished(true);
        }
    };

    const handleStartQuiz = () => {
        setQuizStarted(true);
        setQuizFinished(false);
        setCurrentQuestion(0);
        setScore(0);
    };

    const goals = score < 2000 ? goals1 : goals2;

    return (
      <div className="min-h-screen bg-purple-100 flex justify-center items-center ">
      <div className="bg-white w-[640px] rounded-xl py-6 px-9 shadow-2xl">
        <h1 className="text-center text-3xl text-purple-500 font-semibold mb-2 ">
          Quiz
        </h1>
        <hr className="mb-10" />
            {!quizStarted ? (
                <BeforeQuiz onStartQuiz={handleStartQuiz} />
            ) : quizFinished ? (
                <AfterQuiz score={score} />
            ) : (
                <>
                    <div className="flex flex-col gap-3">
              <p className="text-xl">
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
                </>
            )}
            {quizFinished && <GoalList goals={goals} initialScore={score} />}
        </div>
        </div>
    );
};


const GoalList = ({ goals, initialScore }) => {
    const [goalList, setGoalList] = useState(goals);
    const [score, setScore] = useState(initialScore);

    const handleCompleteGoal = (id, goalScore) => {
        setGoalList(goalList.map(goal => goal.id === id ? { ...goal, completed: true } : goal));
        setScore(score - goalScore);
    };

    return (
        <div>
            <h2>Hedefler</h2>
            <p>Kalan Puan: {score}</p>
            <ul>
                {goalList.map(goal => (
                    <li key={goal.id} style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}>
                        {goal.goalText}
                        <button onClick={() => handleCompleteGoal(goal.id, goal.goalScore)}>
                            Tamamlandı
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quiz;

