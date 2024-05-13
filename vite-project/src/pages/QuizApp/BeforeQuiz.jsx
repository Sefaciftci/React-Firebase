import React from 'react'

const BeforeQuiz = ({ onStartQuiz }) => {
  return (
        <div className='flex flex-col justify-center items-center'>    
            <p className='text-lg font-medium'>Quiz'e başlamadan önce bilmeniz gerekenler.</p>
            <button className='w-1/3  mt-5 py-3 border-2 border-purple-300 text-xl text-purple-600 hover:bg-purple-500 hover:text-white rounded-xl transition-all duration-500' onClick={onStartQuiz}>Başla</button>
        </div>
  )
}

export default BeforeQuiz;