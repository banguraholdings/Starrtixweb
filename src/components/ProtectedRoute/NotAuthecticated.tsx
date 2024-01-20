'use client'
import React, { useEffect } from 'react'
import {redirect} from "next/navigation"
import { userAuth } from '../../../useContext'
interface ProtectedRouteProps {
    children:React.ReactNode
}
function NotAuthecticated({children}:ProtectedRouteProps) {
//checking if user is authenticated
const {isAuthenticated}=userAuth()
const auth = false
useEffect(()=>{
if(isAuthenticated){
redirect(
    '/'
)
}
},[isAuthenticated])
  return (
    <div>
      {children}
    </div>
  )
}

export default NotAuthecticated
