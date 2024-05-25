import React, { useState, useEffect } from 'react';
import goal1 from './goal1';
import goal2 from './goal2';
import { PiHandsClappingDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

function GoalList({ level }) {
  const initialGoals = level === 'level2' ? goal2 : goal1;
  const [goalList, setGoalList] = useState(initialGoals);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const savedGoals = localStorage.getItem('goalList');
    if (savedGoals) {
      setGoalList(JSON.parse(savedGoals));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('goalList', JSON.stringify(goalList));
    if (goalList.every(goal => goal.completed)) {
      setCompleted(true);
    }
  }, [goalList]);

  const handleComplete = (id) => {
    setGoalList(goalList.map(goal => {
      if (goal.id === id) {
        return { ...goal, completed: !goal.completed };
      }
      return goal;
    }));
  };

  const handleReset = () => {
    setGoalList(initialGoals);
    setCompleted(false);
  };

  return (
    <div className=''>
      <div className='bg-purple-500 w-max p-2 text-white rounded-2xl font-mono mb-10'>
        {level === 'level2' ? 'Seviye 2' : 'Seviye 1'}
      </div>
      {completed ? (
        <div className='flex flex-col items-center my-10'>
          <div className=' flex flex-row text-3xl text-purple-500 mb-4 font-mono font-bold '>Başardın<PiHandsClappingDuotone className='ml-2' /></div>
          <div className='flex gap-2 w-full justify-center mt-4'>
          <button className='p-3 border border-purple-500 w-1/3
           rounded-xl text-purple-500 font-mono font-semibold hover:bg-purple-500 hover:text-white transition-all duration-500' onClick={handleReset}>Reset</button>
           <Link className='p-3 border border-purple-500 w-1/3
           rounded-xl text-purple-500 text-center font-mono font-semibold hover:bg-purple-500 hover:text-white transition-all duration-500' to='/ticTac'>
           Zincir
           </Link>
          </div>
        </div>
      ) : (
        goalList.map((goal) => (
          <div key={goal.id} className='font-xl border-2 border-purple-200 p-3 rounded-2xl my-2 flex items-center gap-3'>
            <input 
            className='cursor-pointer p-5 border border-purple-500 text-purple-500'
              type='checkbox' 
              checked={goal.completed} 
              onChange={() => handleComplete(goal.id)} 
            />
            <span className={goal.completed ? 'line-through' : ''}>
              {goal.goalText}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default GoalList;