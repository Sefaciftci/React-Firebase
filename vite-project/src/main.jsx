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
import Profile from './pages/Profile/Profile.jsx';
import TicTac from './pages/TicTac/TicTac.jsx';
import About from './pages/About/About.jsx';
import Pomo from './pages/Pomodoro/Pomo.jsx';
import App from './pages/Quiz2/App.jsx';
import GoalList from './pages/Quiz2/GoalList.jsx';



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
      },
      {
        path:'/profile',
        element:<Profile/>,
        errorElement: <NotFoundPage/>
      },
      {
        path:'/ticTac',
        element:<TicTac/>,
        errorElement: <NotFoundPage/>
      },
      {
        path:'/about',
        element:<About/>,
        errorElement: <NotFoundPage/>
      },
      {
        path:'/pomodoro',
        element:<Pomo/>,
        errorElement: <NotFoundPage/>
      },
      {
        path:'/quiz2',
        element:<App/>,
        errorElement: <NotFoundPage/>
      },
      {
        path:'/goalList',
        element:<GoalList/>,
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
