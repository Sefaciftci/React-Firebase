import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth' //kullanıcı girişi kontrolü 
import {auth} from '../firebase'
import LoadingPage from '../pages/LoadingPage'

export const isLoggedIn = true;

const MainLayout = () => {
    const [user ,isLoading] = useAuthState(auth); 

    if(isLoading){
        return <LoadingPage/>
    }

    //Kullanıcı yoksa signIne gider
    if(!user){
        return <Navigate to='signIn' replace/>
    }
  return (
    <div> 
      <Outlet/>
    </div>
  )
}

export default MainLayout
