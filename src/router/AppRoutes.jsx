import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import ProductDetails from "../pages/ProductDetails";
const AuthLayout = lazy(() => import("../layouts/AuthLayout"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Home = lazy(() => import("../pages/Home"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));
let About = lazy(() => import("../pages/About"));
let Products = lazy(() => import("../pages/Products"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));
const PublicRoute = lazy(() => import("./PublicRoute"));

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "home",
              element: <Home />,
            },
            {
              path: "products",
              element: <Products />,
            },
            {
              path:"products/:id",
              element:<ProductDetails />
            },
            {
              path: "products/category/:category",
              element: <Products />,
            },
            {
              path: "about",
              element: <About />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
