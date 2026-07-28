import React, { useContext } from 'react'
import { Outlet, Navigate } from "react-router";
import { Auth } from "../context/AuthContext";


const PublicRoute = () => {

    const { loggedInUser } = useContext(Auth);
    console.log("hello");
    if (loggedInUser) {
      return <Navigate to={"/home"} />;
    }
  
    return <Outlet />;

}

export default PublicRoute