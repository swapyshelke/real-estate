import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';
import Signout from './pages/Signout.jsx';
import Header from './components/Header.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },{
    path: "/signout",
    element: <Signout />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <>
    <Header /> 
    {/* This will show the Header component on all routes */}
    <RouterProvider
      router={router}
    />
  </>

)
