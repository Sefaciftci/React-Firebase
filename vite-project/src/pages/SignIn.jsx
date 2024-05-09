import React, { useCallback, useState } from 'react'
import { auth } from '../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {Link} from "react-router-dom";

const SignIn = () => {


  // email ve password ile kullanıcı girişi 
  const [email, setEmail] = useState('')
  const [password , setPassword] = useState('')

  const handleSubmit = useCallback((e)=> {
    e.preventDefault();

    if(!email|| !password){
      alert('email ve password boş kalamaz')
      return;
    }

    signInWithEmailAndPassword(auth,email,password)
    .catch((e)=>console.log(e))

  }, [email,password])


  return (
    <div className='min-h-screen bg-purple-100'>
      
      <div className='flex items-center flex-col font-mono pt-20 '>
        <h1 className='text-4xl mb-5 text-purple-900 font-semibold'>Sign in</h1> 

        <div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-10'>
          <input 
          className='py-2 px-5 border-gray border-2 border-purple-100 rounded-xl text-lg focus:outline-none'
          type='email'
          placeholder='email'
          value={email}
          onChange={(e)=> setEmail(e.currentTarget.value)}
          />
          <input
          className='py-2 px-5 border-gray border-2 border-purple-100 rounded-xl text-lg focus:outline-none mb-3'
          type='password'
          placeholder='password'
          value={password}
          onChange={(e)=> setPassword(e.currentTarget.value)}
          />
          <Link className='text-sm font-semibold text-purple-900' to='/forgatPassword'>Forgot Password?</Link>
          <input
          className='py-3 px-5 border-2 border-purple-300 text-purple-900 font-semibold rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-500 cursor-pointer'
          type="submit"
          value='Sign in'/>
          </form>
        </div> 
            
        <Link className='mt-14 text-purple-900 font-semibold' to={'/signUp'}>New to Doppy? <span className='bg-purple-600 text-white p-2 rounded-xl ml-2'>Join Now</span></Link>

      </div>

    </div>
  )
}

export default SignIn