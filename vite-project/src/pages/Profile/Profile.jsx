import React from 'react'
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingPage from "../LoadingPage";

const Profile = () => {

  const [user, isLoading] = useAuthState(auth);
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center font-mono">
      <div className="bg-purple-200 w-[900px] h-[500px] rounded-3xl shadow-xl px-12 py-8 flex justify-center flex-col items-center" >
        <div className='w-60 h-60 rounded-full bg-purple-400 flex items-center justify-center flex-col mb-3 shadow-xl text-white '> 
          <h1 className='text-4xl  justify-center '>{user.displayName}</h1>
          <h3 className='mt-5 text-xl'>Your Level</h3>  
        </div>
        
          <div className='w-72 h-32 mt-10  px-3 py-6 bg-purple-400 rounded-2xl text-white text-center'>
              <h1 className='text-2xl font-semibold mb-3'>Total Skor</h1>
              <p className='font-bold text-xl'>1500</p>
          </div>
      </div>
    </div>
  )
}

export default Profile
