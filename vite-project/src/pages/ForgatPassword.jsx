import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import {sendPasswordResetEmail} from 'firebase/auth'
import {auth} from '../firebase'

const ForgatPassword = () => {


  // password yenileme
    const [email,setEmail] = useState('')
    const handleSubmit = useCallback((e)=> {
        e.preventDefault();
        if(!email){
            return;
        }
        sendPasswordResetEmail(auth,email).then(()=> {
            alert('We sent you e-mail for reset your password. Check your inbox')
        }).catch((e)=> {
            console.log(e);
        })

    }, [email])




  return (
    <div className="min-h-screen bg-purple-100 flex justify-center items-center ">
    <div className="bg-white w-[500px] rounded-xl shadow-xl py-10">
      
      <div className='flex items-center flex-col font-mono'>
          <h1 className='text-4xl mb-5 text-purple-900 font-semibold'>Forgot Password</h1>  
          <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-10'>
            <input 
            className='py-2 px-5 border-gray border-2 border-purple-100 rounded-xl text-lg focus:outline-none'
            type='email'
            placeholder='email'
            value={email}
            onChange={(e)=> setEmail(e.currentTarget.value)}
            />
            <input className='py-3 px-5 border-2 border-purple-300 text-purple-900 font-semibold rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-500 cursor-pointer'
            type="submit"
            value='Reset your Password'/>
            </form>
            <Link className='bg-purple-600 text-white p-2 rounded-xl mt-10' to='/signIn'>Sign in</Link>
      </div>
    
    </div>
    </div>
  )
}

export default ForgatPassword
