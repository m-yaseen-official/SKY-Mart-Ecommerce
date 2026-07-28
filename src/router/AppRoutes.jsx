import React, { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from '../App'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import MainLayout from '../layouts/MainLayout'
let About = lazy(() => import("../pages/About"));
let Products = lazy(() => import("../pages/Products"));
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

const AppRoutes = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <PublicRoute />,
      children:[
        {
          path:"",
          element:< AuthLayout />,
          children:[
            {
          path:"",
          element: <Login />
        },
        {
          path:"register",
          element:<Register />
        }
          ]
        }
        
      ]
    },
    {
      path:"/",
      element:<ProtectedRoute />,
      children:[
        {
      path:"",
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
      path:"products/category/:category",
      element:<Products />
    },
        {
          path:"about",
          element:<About />
        }
      ]
    }]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRoutes