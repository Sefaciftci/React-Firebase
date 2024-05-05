import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import {sendPasswordResetEmail} from 'firebase/auth'
import {auth} from '../firebase'

const ForgatPassword = () => {

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
    <div className='flex items-center flex-col mt-16 font-mono '>
        <h1 className='text-4xl mb-10 text-red-600 font-semibold'>Forgot Password</h1>  
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-10'>
          <input 
          className='py-2 px-5 border-gray border-2 rounded-xl text-lg'
          type='email'
          placeholder='email'
          value={email}
          onChange={(e)=> setEmail(e.currentTarget.value)}
          />
          <input className='py-3 px-5 border-2 border-gray rounded-2xl text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-500 cursor-pointer'
          type="submit"
          value='Reset your Password'/>
          </form>
          <Link className='mt-10' to='/signIn'>Sign In</Link>
    </div>
  )
}

export default ForgatPassword
