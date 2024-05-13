import React from 'react'
import { Link } from "react-router-dom";


const AfterQuiz = ({score}) => {
  return (    
        <div className='flex flex-row gap-4 mt-8 justify-between items-center'>
            <p className='text-lg font-bold text-purple-600 '>Quiz Bitti!</p>
            <Link className='py-2 px-4 border-purple-500 border-2 rounded-2xl bg-purple-500 text-white text-lg font-semibold hover:bg-purple-400 transition-all duration-500' to='/profile'>Hedef Listen Hazır</Link>
        </div>
  )
}

export default AfterQuiz
