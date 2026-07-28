import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from '../App'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import MainLayout from '../layouts/MainLayout'
import Products from '../pages/Products'
import About from '../pages/About'

const AppRoutes = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <AuthLayout />,
      children:[
        {
          path:"",
          element: <Login />
        },
        {
          path:"/register",
          element:<Register />
        }
      ]
    },
    {
      path:"/",
      element:<MainLayout />,
      children:[
        {
          path:"home",
          element:<Home />
        },
        {
          path:"products",
          element:<Products />
        },
        {
          path:"about",
          element:<About />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRoutes