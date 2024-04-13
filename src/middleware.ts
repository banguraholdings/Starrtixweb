import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import axios from "axios"

export async function middleware(request: NextRequest) {
const url = request.nextUrl.clone()
  try {
    
      const token = await request.cookies.get('token')
      // const token:any= document.cookie.split(';').map(cookie=>cookie.split('='))
      //  .reduce((accumulator, [key, value]) =>({...accumulator, [key.trim()]:decodeURIComponent(value)}),{});
      console.log(token?.value)
    const data=await(await fetch(process.env.NEXT_PUBLIC_BASE_URL+"/auth/user/",{
      method:"GET",
       headers:{
        'Content-Type': 'application/json',
         'Authorization': `Bearer ${token?.value}`
       } 

      
    })).json()

    console.log(data)


    if(url.pathname==="/Auth/Signin/" || url.pathname==="/Auth/Signup/"){
      if(token){
        return NextResponse.redirect(new URL('/',request.url))
      }
    }else if(url.pathname==="/User/Dashboard"|| url.pathname==="/User/Marketing" ||url.pathname==="/User/Profile"|| url.pathname==="/User/Ticket"){
      if(!token){
        return NextResponse.redirect(new URL('/',request.url))
      }
    }
    return NextResponse.next()
  } catch (error) {
    
  }
}
 
