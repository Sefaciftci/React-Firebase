import React, { useCallback, useState } from 'react'
import { auth } from '../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {Link} from "react-router-dom";

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password , setPassword] = useState('')

  const handleSubmit = useCallback((e)=> {
    e.preventDefault();

    if(!email|| !password){
      alert('email ve password boş kalamaz')
      return;
    }

    signInWithEmailAndPassword(auth,email,password)
    .then(()=> alert('Signed in'))
    .catch((e)=>console.log(e))

  }, [email,password])


  return (
    <div className='flex items-center flex-col mt-16 font-mono '>
        <h1 className='text-4xl mb-10 text-red-600 font-semibold'>Sign In</h1>  
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-10'>
          <input 
          className='py-2 px-5 border-gray border-2 rounded-xl text-lg'
          type='email'
          placeholder='email'
          value={email}
          onChange={(e)=> setEmail(e.currentTarget.value)}
          />
          <input
          className='py-2 px-5 border-gray border-2 rounded-xl text-lg'
          type='password'
          placeholder='password'
          value={password}
          onChange={(e)=> setPassword(e.currentTarget.value)}
          />
          <input
          className='py-3 px-5 border-2 border-gray rounded-2xl text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-500 cursor-pointer'
          type="submit"/>
        </form>
        <Link className='mt-10' to={'/signUp'}>Don't you have an acoount? <span className='bg-green-600 text-white p-1.5 rounded-lg'>Sign Up</span></Link>

    </div>
  )
}

export default SignIn