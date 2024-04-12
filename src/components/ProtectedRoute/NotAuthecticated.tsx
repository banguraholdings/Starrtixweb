'use client'
import React, { useEffect } from 'react'
import {redirect} from "next/navigation"
import { userAuth } from '../../../useContext'
interface ProtectedRouteProps {
    children:React.ReactNode
}
function NotAuthecticated({children}:ProtectedRouteProps) {
//checking if user is authenticated
const {isAuthenticated,  superuser}=userAuth()
useEffect(()=>{
  // console.log(isAuthenticated)
if(isAuthenticated && !superuser){
redirect(
    '/'
)
}
if(isAuthenticated && superuser ){
  return redirect("/Admin/Dashboard")
}
},[isAuthenticated,superuser])
  return (
    <div>
      {children}
    </div>
  )
}

export default NotAuthecticated
