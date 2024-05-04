import React from 'react'
import ReactDOM from 'react-dom/client'
import Profile from './pages/Profile.jsx';
import Home from './pages/Home.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage.jsx';



const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement: <NotFoundPage/>
  },
  {
    path:'/profile',
    element: <Profile/>,
    errorElement:<NotFoundPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
