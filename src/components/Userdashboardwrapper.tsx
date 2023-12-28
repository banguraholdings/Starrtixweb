'use client'


import React from 'react'
import { MdDashboard } from "react-icons/md";
import { paths, userDashboardsPath } from "@/api/dummyData";
import { FaCalendarAlt,FaUsers } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoSettings } from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { IoIosHome } from "react-icons/io";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { CiBank } from "react-icons/ci";

function Userdashboardwrapper({children}:any) {
    const pathname = usePathname().split("/");

  return (
    <div className="flex ">
    <div className="h-screen space-y-4 bg-blue-900 relative lg:w-72 w-20 flex flex-col items-center">
      {/* header */}
      <div className="w-full h-16 border-b border-gray-400 flex justify-center items-center">
        <h1 className="text-sm lg:text-4xl font-bold  text-blue-500 p-4">
          Sky
          <span className="text-sm lg:text-xl text-white text-border">
            tix
          </span>
        </h1>
      </div>

      {/* Dashboard button  */}
      <div className="w-full h-full  flex flex-col items-center space-y-2">
        {userDashboardsPath.map((value, index)=>(
          <Link key={index} href={`/User/${value.value}`} className={`w-full h-12 flex items-center justify-center ${value.value===pathname[2]?"bg-white":null}`}>
          <div className=" flex items-center justify-start lg:w-10/12 h-full lg:space-x-4 ">
            {
              value.value==="Dashboard"?<IoIosHome size={24} color={`${value.value===pathname[2]?"black":"white"}`}/>:(
                value.value==="Marketing" ? <HiMiniSpeakerWave size={24} color={`${value.value===pathname[2]?"black":"white"}`}/>:(
                  value.value==="Finance"?<CiBank size={24} color={`${value.value===pathname[2]?"black":"white"}`}/>:
null
                )

              )

            }
          <h1 className={` hidden hover:block hover:text-black lg:block font-bold ${value.value===pathname[2]?"text-black":"text-white"}`}>
            {value.name}
          </h1>
          </div>
        </Link>
        ))}
      </div>
    </div>
    <div className="flex-1 h-screen overflow-scroll w-screen">{children}</div>
  </div>
  )
}

export default Userdashboardwrapper
