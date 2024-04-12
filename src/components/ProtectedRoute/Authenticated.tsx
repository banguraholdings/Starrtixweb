'use client'
import React, { useEffect } from 'react'
import { userAuth } from '../../../useContext'
import { redirect } from 'next/navigation'
import { usePathname } from "next/navigation";

interface ProtectedRouteProps {
  children: React.ReactNode;
}


const Authenticated:React.FC<ProtectedRouteProps>=({children})=> {
    const {isAuthenticated,  superuser} =userAuth()
    const path = usePathname().split("/")[1]
    
    useEffect(()=>{
      if(!isAuthenticated){
        return redirect("/")
      }
      console.log(superuser)
      if(isAuthenticated && !superuser ){
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
    },[isAuthenticated,superuser ])
    return <>{children}</>;

}

export default Authenticated
