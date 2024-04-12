"use client";
import Dashboardwrapper from "@/components/Dashboardwrapper";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { TbFreeRights } from "react-icons/tb";
import { RiLoader2Fill } from "react-icons/ri";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import ResponsiveLineChart from "@/components/ResponsiveLineChart";
import { IoIosAddCircle } from "react-icons/io";
import ResponsivePieChart from "@/components/ResponsivePieChart";
import Authenticated from "../../../components/ProtectedRoute/Authenticated"
import { usePathname } from "next/navigation";

function Dashboard() {
  const path = usePathname().split("/")[1]

  useEffect(()=>{
console.log(path)
  },[path])
  return (
    <Authenticated >

    <Dashboardwrapper>
      {/* container */}
      <div className=" bg-gray-100 border-b-2 w-full p-2 z-0">
        {/* header */}
        <div className="flex w-full  items-center pl-4 pr-4">
          <h1>Dashboard</h1>

          {/* user credentials */}
          <div className=" flex-1 w-full h-12 flex items-center justify-end space-x-2">
            {/* profile picture */}
            <div className="w-8 h-8 rounded-full bg-gray-400"></div>

            {/* username */}
            <h1 className="text-sm">Admin</h1>
          </div>
        </div>
      </div>


      {/* body */}

      {/* event numbers */}
      <div className="p-4 bg-gray-100 w-full xl:justify-center xl:flex">
        <ul className="flex justify-between w-full">
          {/* grid 1 */}
          <li className=" space-y-4  w-20 text-[8px] items-center justify-center flex flex-col h-20 md:w-40 md:h-40 xl:w-60 md:text-xs bg-white border rounded-lg shadow">
            <h1 className="text-gray-400">UPCOMING EVENT</h1>

            <h1 className="text-base md:text-2xl">2000</h1>
          </li>
          {/* grid 2 */}

          <li className="space-y-4 w-20 h-20 text-[8px] items-center justify-center flex flex-col md:w-40 md:h-40 xl:w-60 md:text-xs bg-white border rounded-lg shadow">
            <h1 className="text-gray-400">PAST EVENT</h1>

            <h1 className="text-base md:text-2xl">3725</h1>
          </li>
          {/* grid 3 */}

          <li className="space-y-4 w-20 h-20 text-[8px] items-center justify-center flex flex-col md:w-40 md:h-40 xl:w-60 md:text-xs bg-white border rounded-lg shadow">
            <h1 className="text-center text-gray-400">ONGOING EVENT</h1>

            <h1 className="text-base md:text-2xl">4578</h1>
          </li>
          {/* grid 4 */}
          <li className="space-y-4 w-20 h-20 text-[8px] items-center justify-center flex flex-col md:w-40 md:h-40 xl:w-60 md:text-xs bg-white border rounded-lg shadow">
            <h1 className="text-center text-gray-400">FREE EVENT</h1>

            <h1 className="text-base md:text-2xl">4578</h1>
          </li>

        </ul>
      </div>


      {/* charts and graphs */}
      <div className="p-4">
        <div className="flex md:flex-row flex-col  gap-2 justify-between items-center">
          <div className="md:w-3/4 w-full border rounded-lg shadow">
          <ResponsiveLineChart />
        </div>
          <div className="md:w-1/4 w-full border rounded-lg shadow">
          <ResponsivePieChart />
        </div>
        </div>
        
      </div>

    </Dashboardwrapper>
    </Authenticated>
  );
}

export default Dashboard;
