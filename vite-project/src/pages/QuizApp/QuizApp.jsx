import React, { useState } from 'react';
import { questions } from './data';

const Quiz = () => {


    const [currentQuestion , setCurrentQuestion] = useState(0)
    const [score , setScore] = useState(0); 

    const handleAnswerClick = (answerScore) => {
        setScore(score + answerScore);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            // Tüm sorular cevaplandı, sonucu göster
            alert(`Quiz bitti! Puanınız: ${score}`);
            // veya istediğiniz başka bir şeyi yapabilirsiniz
        }
    };


  return (
    <div className='min-h-screen bg-purple-100 flex justify-center items-center '>
      <div className='bg-white w-[600px] rounded-xl py-6 px-9'>
        <h1 className='text-center text-3xl text-purple-500 font-semibold mb-2'>Quiz</h1>
        <hr className='mb-10'/>

        <div className='flex flex-col gap-3'>
            <p className='text-xl '> {questions[currentQuestion].questionText}</p>

            <div className="flex flex-col gap-3 mt-4">
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <button className='border-2 p-3 text-left rounded-xl text-lg hover:bg-purple-100 transation-all duration-500' key={index} onClick={() => handleAnswerClick(answerOption.answerScore)}>
                        {answerOption.answerText}
                    </button>
                ))}
            </div>
            
        </div>

        <p className='text-gray mt-8 text-center'>{currentQuestion  + 1}  of 13 questions</p>
        
      </div>
    </div>
  )
}

export default Quiz
