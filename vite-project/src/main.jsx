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



const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement: <NotFoundPage/>
  },
  {
    path:'/signUp',
    element: <SignUp/>,
    errorElement:<NotFoundPage/>
  },
  {
    path:'signIn',
    element:<SignIn/>,
    errorElement:<NotFoundPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
