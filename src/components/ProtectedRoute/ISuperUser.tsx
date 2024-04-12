'use client'
import React, { useEffect } from 'react'
import { userAuth } from '../../../useContext'
import { redirect } from 'next/navigation'
import { usePathname } from "next/navigation";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ISuperUser:React.FC<ProtectedRouteProps>=({children})=> {
    const {isAuthenticated,  superuser} =userAuth()
    const path = usePathname().split("/")[1]

    const getUser=()=>{
      const user = localStorage.getItem("authenticated")
    }
    useEffect(()=>{
       // console.log(superuser,isAuthenticated )
       if(isAuthenticated && superuser ){
        return redirect("/Admin/Dashboard")
      }
      if(!superuser){
        return 
      }
     if(!isAuthenticated){
      return redirect("/")
     }
      // console.log(isAuthenticated)
      // if (!isAuthenticated) {
        
      //   return redirect("/");
      // }
      // const userRole = user==="superuser" ? 'superuser' : 'regular';
      // if (!allowedRoles.includes(userRole)) {
      //   const redirectRoute = user==="superuser" ? '/Admin' : '/User';
        
      //   return redirect(redirectRoute);
      // }
    },[isAuthenticated,superuser])
    return <>{children}</>;
}

export default ISuperUser
