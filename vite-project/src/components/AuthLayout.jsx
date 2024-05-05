import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from './MainLayout'
import {useAuthState} from 'react-firebase-hooks/auth' 
import {auth} from '../firebase'
import LoadingPage from '../pages/LoadingPage'

const AuthLayout = () => {

    const [user , isLoading] = useAuthState(auth);

    if(isLoading){
        return <LoadingPage/>
    }

    if(user){
        return <Navigate to='/' replace />
    }

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default AuthLayout
