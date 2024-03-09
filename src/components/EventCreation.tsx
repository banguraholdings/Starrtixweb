'use client'
import React from 'react'
const EventCreation =({ children }:any)=>{

    return(
        <div className="fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg shadow-lg space-y-3 lg:max-w-xl max-w-sm w-full">
          {children}
         
        </div>
      </div>

    )
}
export default EventCreation