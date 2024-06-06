import React, { useState, useEffect } from "react";
import goal1 from "./goal1";
import goal2 from "./goal2";
import { PiHandsClappingDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

function GoalList({ level, resetQuiz }) {
  const initialGoals = level === "level2" ? goal2 : goal1;
  const [goalList, setGoalList] = useState(initialGoals);
  const [completed, setCompleted] = useState(false);

  
  useEffect(() => {
    //goalList durumunu güncelliyoruz.
    if (goalList.every((goal) => goal.completed)) {
      setCompleted(true);
    }
  }, [goalList]);

  //handleComplete fonksiyonu, bir hedefin tamamlanma durumunu değiştirir.
  const handleComplete = (id) => {
    setGoalList(
      goalList.map((goal) => {
        if (goal.id === id) {
          return { ...goal, completed: !goal.completed };
        }
        return goal;
      })
    );
  };

  //hedef listesini sıfırlar ve resetQuiz fonksiyonunu çağırarak quiz'i sıfırlar.
  const handleResetQuiz = () => {
    resetQuiz(); 
  };

  const handleReset = () => {
    setGoalList(initialGoals);
    setCompleted(false);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Link to="/">
            <IoArrowBackCircle className="text-4xl text-purple-500 font-bold" />
          </Link>
        </div>
        <div className="bg-purple-500 w-max p-2 text-white rounded-2xl font-mono mb-4">
          {level === "level2" ? "Seviye 2" : "Seviye 1"}
        </div>
      </div>

      {completed ? (
        <div className="flex flex-col items-center my-10">
          <div className=" flex flex-row text-3xl text-purple-500 mb-4 font-mono font-bold ">
            Başardın
            <PiHandsClappingDuotone className="ml-2" />
          </div>
          <div className="flex gap-2 w-full justify-center mt-4">
            <button
              className="p-3 border border-purple-500 w-1/3
           rounded-xl text-purple-500 text-center font-mono font-semibold hover:bg-purple-500 hover:text-white transition-all duration-500"
              onClick={handleResetQuiz}
            >
              Quiz'i Sıfırla
            </button>
            <button
              className="p-3 border border-purple-500 w-1/3
           rounded-xl text-purple-500 font-mono font-semibold hover:bg-purple-500 hover:text-white transition-all duration-500"
              onClick={handleReset}
            >
              Reset
            </button>
            <Link
              className="p-3 border border-purple-500 w-1/3
           rounded-xl text-purple-500 text-center font-mono font-semibold hover:bg-purple-500 hover:text-white transition-all duration-500"
              to="/ticTac"
            >
              Zincir
            </Link>
          </div>
        </div>
      ) : (
        goalList.map((goal) => (
          <div
            key={goal.id}
            className="font-xl border-2 border-purple-200 p-3 rounded-2xl my-2 flex items-center gap-3 text-purple-400 font-cursive"
          >
            <input
              className="cursor-pointer "
              type="checkbox"
              checked={goal.completed}
              onChange={() => handleComplete(goal.id)}
            />
            <span className={goal.completed ? "line-through" : ""}>
              {goal.goalText}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default GoalList;
