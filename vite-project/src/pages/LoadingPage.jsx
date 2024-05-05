import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";


const LoadingPage = () => {
  return (  
    <div className="flex justify-center items-center h-screen bg-purple-100">
      <div className='text-center'>
        <SyncLoader color="#9255E2" loading={100} />
      </div>
    </div>
  )
}

export default LoadingPage
