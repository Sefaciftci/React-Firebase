import { useCallback, useState } from "react"
import React from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'
import {Link} from 'react-router-dom'

const SignUp = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = useCallback((e)=> {
    e.preventDefault();

    if(!email || !password) {
      alert('email ve password boş kalamaz.')
      return;
    }

   createUserWithEmailAndPassword(auth , email, password)
  .then(()=> {
    alert('Giris yapildi.');
  })
  .catch((e)=> {
    console.log(e);
  })

    console.log('email' + email + 'password' + password);
  } , [email,password])


  

  
  return (
    <div className='text-center mt-10'>
      <h1 className='text-3xl mb-8 font-mono font-semibold text-green-600'>Create New Acoount</h1>
      <form 
      onSubmit={handleSubmit}
      className='flex flex-col items-center gap-5 mb-10'>
        <input 
        className='py-3 px-5 border-2 border-gray rounded-2xl' 
        type='email' 
        placeholder='e-mail'
        value={email}
        onChange={(e)=>setEmail(e.currentTarget.value)}
        />  

        <input 
        className='py-3 px-5 border-2 border-gray rounded-2xl' 
        type='password' 
        placeholder='password'
        value={password}
        onChange={(e)=> setPassword(e.currentTarget.value)}/>
        <input className='py-3 px-5 border-2 border-gray rounded-2xl text-gray-400 hover:bg-green-600 hover:text-white transition-all duration-500 cursor-pointer' type='submit'/>
      </form>
      <Link to={'/signIn'}>Do you already have an acoount? <span className='bg-red-600 text-white p-1.5 rounded-lg'>Sign In</span></Link>

    </div>
  )
}

export default SignUp
