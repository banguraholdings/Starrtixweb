"use client";

import NotAuthecticated from "@/components/ProtectedRoute/NotAuthecticated";
import Userdashboardwrapper from "@/components/Userdashboardwrapper";
import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Calendar from "react-calendar";
import { activities } from "@/api/dummyData";
import ResponsiveLineChart from "@/components/ResponsiveLineChart";
import ResponsivePieChart from "@/components/ResponsivePieChart";
import ResponsiveEventTable from "@/components/ResponsiveEventTable";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
function Page() {
  //states
  const [value, onChange] = useState<Value>(new Date());
  return (
    <NotAuthecticated>
      <Userdashboardwrapper>
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
              <h1 className="text-sm">Judah Alvin Dore</h1>
            </div>
          </div>
        </div>

        {/* event selection */}
        <div className="p-4 w-full bg-blue-500">
          <select name="" id="" className="w-40 p-1">
            <option value="1">event 1</option>
            <option value="1">event 1</option>
            <option value="1">event 1</option>
          </select>
        </div>

        {/* event numbers */}
        <div className="p-4 bg-gray-100 w-full xl:justify-center xl:flex">
          <ul className="flex justify-between w-full">
            {/* grid 1 */}
            <li className=" space-y-4  w-20 text-[8px] items-center justify-center flex flex-col h-20 md:w-40 md:h-40 xl:w-60 md:text-xs bg-white border rounded-lg shadow">
              <h1 className="text-gray-400">TOTAL SALES</h1>

              <h1 className="text-base md:text-2xl">Le120k</h1>
            </li>
            {/* grid 2 */}

            <li className="space-y-4 w-20 h-20 text-[8px] items-center justify-center flex flex-col md:w-40 md:h-40 xl:w-60 md:text-xs bg-white border rounded-lg shadow">
              <h1 className="text-gray-400">REGISTRRATION</h1>

              <h1 className="text-base md:text-2xl">3725</h1>
            </li>
            {/* grid 3 */}

            <li className="space-y-4 w-20 h-20 text-[8px] items-center justify-center flex flex-col md:w-40 md:h-40 xl:w-60 md:text-xs bg-white border rounded-lg shadow">
              <h1 className="text-center text-gray-400">TOTAL ATTENDANCES</h1>

              <h1 className="text-base md:text-2xl">4578</h1>
            </li>
            {/* grid 4 */}

            <li
              style={{
                backgroundImage: `url('/background/ev.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="w-20 h-20 md:w-40 md:h-40 xl:w-60 bg-white border rounded-lg shadow"
            >
              <button
                type="button"
                className="w-full h-full rounded-lg bg-blue-500 bg-opacity-50 flex items-center justify-center"
              >
                <IoIosAddCircle
                  color="white"
                  size={32}
                  className="hover:text-gray-300"
                />
              </button>
            </li>
          </ul>
        </div>

        {/* calendar and other event */}
        <div className="grid grid-cols-1 p-4 lg:grid-cols-2">
          {/* Recent Activity History */}
          <div className="p-2 ">
            {/* header */}
            <div className="flex -full">
              <h1>Recent Activity</h1>
              <div className="flex-1 justify-end flex text-blue-600">
                <button>See More`{">>"}`</button>
              </div>
            </div>

            {/* activities */}
            <div className="flex flex-col space-y-10 p-4">
              {activities.map((value, index) => (
                <button key={index} className="border p-4 hover:bg-gray-100">
                  <div className="flex space-x-2 b">
                    <img
                      src="/Lottie/people.png"
                      alt="event icon"
                      className="w-6 h-6 rounded-full"
                    />
                    <div>
                      <h1 className="font-semibold text-start ">
                        {value.event}
                      </h1>
                    </div>
                    <h1>{value.activity}</h1>
                  </div>

                  <div className=" flex justify-center w-full">
                    <div className="w-10/12">
                      <h1 className="text-start text-blue-600">
                        {value.about}
                      </h1>
                    </div>
                  </div>

                  <div className=" flex justify-center w-full">
                    <div className="w-10/12">
                      <h1 className="text-start text-gray-600">{value.time}</h1>
                    </div>
                  </div>
                  <div className=" flex justify-center w-full">
                    <div className="w-10/12">
                      {value.img ? <img src={value.img} alt="images" /> : null}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Calendar and other utilities */}
          <div className="p-6 border-2 rounded-lg shadow bg-gray-100 space-y-12">
            {/* calendar */}
            <div className="w-full p-12 bg-white rounded-lg border">
              <Calendar onChange={onChange} value={value} />
            </div>
            {/* graph */}
            <div>
              <ResponsiveLineChart />
            </div>
            {/* pie chart */}
            <div>
              <ResponsivePieChart />
            </div>
          </div>
        </div>

        {/* event table */}
        <div className="w-full p-4">
          <ResponsiveEventTable />
        </div>
      </Userdashboardwrapper>
    </NotAuthecticated>
  );
}

export default Page;
