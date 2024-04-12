import React, { useEffect } from 'react'
import {redirect} from "next/navigation"
import { userAuth } from '../../../useContext'
interface ProtectedRouteProps {
    children:React.ReactNode
}
function HomeProtection({children}:ProtectedRouteProps) {
//checking if user is authenticated
const {isAuthenticated,  superuser}=userAuth()
useEffect(()=>{
  // console.log(isAuthenticated)

if(isAuthenticated && superuser ){
  return redirect("/Admin/Dashboard")
}
},[isAuthenticated])
  return (
    <div>
      {children}
    </div>
  )
}

export default HomeProtection
