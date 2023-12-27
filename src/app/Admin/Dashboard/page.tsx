"use client";
import Dashboardwrapper from "@/components/Dashboardwrapper";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { TbFreeRights } from "react-icons/tb";
import { RiLoader2Fill } from "react-icons/ri";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import ResponsiveLineChart from "@/components/ResponsiveLineChart";
import ResponsivePieChart from "@/components/ResponsivePieChart";

function Dashboard() {
 
  return (
    <Dashboardwrapper>
      <div className="w-full h-full  p-4 flex flex-col items-center">
        <div className=" w-full flex  flex-col items-center p-4">
          {/* amounts */}
          <ul className="w-11/12 items-center flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-2">
            <li className="w-full h-20 bg-gray-100 border-[0.2px] border-gray-400 shadow-sm shadow-black flex  ">
              <div className="w-4/12 h-full bg-blue-500 border flex items-center justify-center">
                <FaArrowAltCircleRight size={32} color="white" />
              </div>
              <div className="w-full h-full  flex items-center justify-center">
                <div className="w-11/12">
                  <h1 className="font-bold text-xl">2000</h1>
                  <h1 className="text-sm font-light text-gray-600">
                    Upcoming Event
                  </h1>
                </div>
              </div>
            </li>
            <li className="w-full h-20 bg-gray-100 border-[0.2px] border-gray-400 shadow-sm shadow-black flex ">
              <div className="w-4/12 h-full bg-blue-900 flex items-center justify-center">
                <FaArrowAltCircleLeft size={32} color="white" />
              </div>
              <div className="w-full h-full  flex items-center justify-center">
                <div className="w-11/12">
                  <h1 className="font-bold text-xl">2000</h1>
                  <h1 className="text-sm font-light text-gray-600">
                    Past Event
                  </h1>
                </div>
              </div>
            </li>
            <li className="w-full h-20 bg-gray-100 border-[0.2px] border-gray-400 shadow-sm shadow-black flex ">
              <div className="w-4/12 h-full bg-blue-500 flex items-center justify-center">
                <RiLoader2Fill size={32} color="white" />
              </div>
              <div className="w-full h-full  flex items-center justify-center">
                <div className="w-11/12">
                  <h1 className="font-bold text-xl">2000</h1>
                  <h1 className="text-sm font-light text-gray-600">
                    Ongoing Event
                  </h1>
                </div>
              </div>
            </li>
            <li className="w-full h-20 bg-gray-100 border-[0.2px] border-gray-400 shadow-sm shadow-black flex ">
              <div className="w-4/12 h-full bg-blue-900 flex items-center justify-center">
                <TbFreeRights size={32} color="white" />
              </div>
              <div className="w-full h-full  flex items-center justify-center">
                <div className="w-11/12">
                  <h1 className="font-bold text-xl">2000</h1>
                  <h1 className="text-sm font-light text-gray-600">
                    Free Event
                  </h1>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* chart showing the rate at which profit and loss are made within the month */}
        <div className="p-4 w-full flex flex-col space-y-4 xl:space-y-0 items-center xl:flex-row">
          <ResponsiveLineChart/>
          <div className="border w-full grid place-items-center">

          <ResponsivePieChart/>
          </div>
        </div>

      {/* top five customers */}

      <div className="w-full">

      </div>
      </div>
    </Dashboardwrapper>
  );
}

export default Dashboard;
