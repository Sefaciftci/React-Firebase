import React from 'react'
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingPage from "../LoadingPage";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const Profile = () => {

  const [user, isLoading] = useAuthState(auth);
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center font-mono">
      <div className="bg-purple-200 w-[900px] h-[500px] rounded-3xl shadow-xl px-12 py-8 flex justify-center flex-col items-center" >
        <div className='mr-auto'>
          <Link to='/'>
            <IoArrowBackCircle className='text-4xl text-purple-400 font-bold' />
          </Link>
        </div>

        <div className='flex flex-row items-center'>
          
        <div className=' md:w-48 w-36 h-1 bg-purple-300 mt-20 mx-5 shadow-2xl'></div> 
        <div className='w-60 h-60 rounded-full bg-purple-400 flex items-center justify-center flex-col mb-3 shadow-xl text-white'>
          <h1 className='text-4xl  justify-center '>{user.displayName}</h1>
          <h3 className='mt-5 text-xl'>Your Level</h3>  
        </div>
        <div className='md:w-48 w-36 h-1 bg-purple-300 mt-20 mx-5 shadow-2xl'></div> 
        
        </div>

          <div className='w-72 h-32 mt-10  px-3 py-6 bg-purple-400 rounded-2xl text-white text-center shadow-xl'>
          <Link className='mt-3 bg-purple-500 text-white p-2 rounded-lg' to='/ticTac'>Zinciri Kırma</Link>
          </div>
          
          

          
      </div>
    </div>
  )
}

export default Profile
