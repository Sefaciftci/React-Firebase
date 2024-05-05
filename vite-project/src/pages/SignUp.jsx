import { useCallback, useState } from "react"
import React from 'react'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth} from '../firebase'
import {Link} from 'react-router-dom'

const SignUp = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');

  const handleSubmit = useCallback((e)=> {
    e.preventDefault();

    if(!email || !password) {
      alert('email ve password boş kalamaz.')
      return;
    }

   createUserWithEmailAndPassword(auth , email, password).then((auth)=>{
    updateProfile(auth.user , {displayName:name});
   })
  .catch((e)=> {
    console.log(e);
  })

    
  } , [name,email,password])



  
  return (

    <div className="min-h-screen bg-purple-100">

    
    <div className='flex items-center flex-col font-mono pt-20 '>
      <h1 className='text-4xl mb-5 text-purple-900 font-semibold'>Create New Acoount</h1>
      <form 
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 mt-10'>
        <input 
        className='py-2 px-5 border-gray border-2 border-purple-100 rounded-xl text-lg focus:outline-none' 
        type='text' 
        placeholder='Enter your name'
        value={name}
        onChange={(e)=>setName(e.currentTarget.value)}
        /> 

        <input 
        className='py-2 px-5 border-gray border-2 border-purple-100 rounded-xl text-lg focus:outline-none' 
        type='email' 
        placeholder='e-mail'
        value={email}
        onChange={(e)=>setEmail(e.currentTarget.value)}
        /> 

        <input 
        className='py-2 px-5 border-gray border-2 border-purple-100 rounded-xl text-lg focus:outline-none' 
        type='password' 
        placeholder='password'
        value={password}
        onChange={(e)=> setPassword(e.currentTarget.value)}/>
        <input 
        className='py-3 px-5 mt-4 border-2 border-purple-300 text-purple-900 font-semibold rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-500 cursor-pointer'
        type='submit'
        value='Sign up'/>
      </form>
      <Link className="font-semibold text-purple-900 mt-14" to={'/signIn'}>Do you have  already an acoount? <span className='bg-purple-600 text-white p-2 rounded-xl ml-2'>Sign in</span></Link>

    </div>

    </div>
  )
}

export default SignUp
