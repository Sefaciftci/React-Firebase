import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import ForgatPassword from './pages/ForgatPassword.jsx';
import MainLayout from './components/MainLayout.jsx';
import AuthLayout from './components/AuthLayout.jsx';



const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    errorElement:<NotFoundPage/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        errorElement: <NotFoundPage/>
      }
    ]
  },
  {
    path:'/',
    element:<AuthLayout/>,
    errorElement:<NotFoundPage/>,
    children:[
      {
        path:'/signUp',
        element: <SignUp/>,
        errorElement:<NotFoundPage/>
      },
      {
        path:'signIn',
        element:<SignIn/>,
        errorElement:<NotFoundPage/>
      },
      {
        path:'forgatPassword',
        element:<ForgatPassword/>,
        errorElement:<NotFoundPage/>
      }
    ]
  }
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
