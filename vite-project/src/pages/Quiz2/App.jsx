import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';
import GoalList from './GoalList';

function App() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [level, setLevel] = useState(null);
  const [resetQuiz, setResetQuiz] = useState(false); 

  useEffect(() => {
    const savedQuizCompleted = localStorage.getItem('quizCompleted');
    const savedLevel = localStorage.getItem('level');

    if (savedQuizCompleted) {
      setQuizCompleted(true);
      setLevel(savedLevel);
    }
  }, []);

  const handleQuizComplete = (score) => {
    const userLevel = score > 2000 ? 'level2' : 'level1';
    setLevel(userLevel);
    setQuizCompleted(true);
    localStorage.setItem('quizCompleted', 'true');
    localStorage.setItem('level', userLevel);
  };

  const handleResetQuiz = () => {
    setResetQuiz(!resetQuiz);
    setQuizCompleted(false);
    localStorage.removeItem('quizCompleted');
    localStorage.removeItem('level');
  };

  return (
    <div className="min-h-screen bg-purple-100 flex justify-center items-center ">
      <div className="bg-white w-[640px] rounded-xl py-6 px-9 shadow-xl">

      {!quizCompleted ? (
        <Quiz onQuizComplete={handleQuizComplete} resetQuiz={resetQuiz}  />
      ) : (
        <GoalList level={level} resetQuiz={handleResetQuiz} />
      )}

    </div>
    </div>
  );
}

export default App;