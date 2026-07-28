import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  console.log("hello authlay");
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AuthLayout