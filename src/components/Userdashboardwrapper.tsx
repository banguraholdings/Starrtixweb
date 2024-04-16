"use client";

import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { paths, userDashboardsPath } from "@/api/dummyData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosHome } from "react-icons/io";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { CiBank } from "react-icons/ci";
import { GiHamburgerMenu,GiTicket } from "react-icons/gi";
import { FaRegUserCircle,FaBlog } from "react-icons/fa";
import AOS from "aos";
import { IoClose } from "react-icons/io5";
function Userdashboardwrapper({ children }: any) {
  const pathname = usePathname().split("/");
  const [open, setOpened] = useState(false);

  useEffect(() => {
    AOS.init({
      // settings
      duration: 2000,
    });
  }, []);
  return (
    <div className="lg:flex ">
      {/* small screen dashboard header */}

      <div className="z-50 lg:hidden  text-white w-full bg-blue-500">
        <div className="z-50 flex w-full bg-blue-950 p-6 items-center">
          {/* logo */}
          <Link 
          
          href={"/"}>
          <img
             src="../../images/starrtix.png"
             className=" h-20"
             alt="image"
             />
          </Link>

          {/* menu button */}
          <div className=" flex-1  justify-end flex items-center">
            {!open ? (
              <button className="" onClick={() => setOpened(true)}>
                <GiHamburgerMenu size={32} color={"white"} />
              </button>
            ) : (
              <button onClick={() => setOpened(false)}>
                <IoClose size={32} color={"white"} />
              </button>
            )}
          </div>
        </div>
        {/* navigation buttons */}

        <div className="bg-blue-950 z-50 w-full ">
          {open ? (
            <div data-aos="fade-up" className="space-y-6 p-6 bg-blue-950">
              {userDashboardsPath.map((value, index) => (
                <Link
                  key={index}
                  href={`/User/${value.value}`}
                  className={`w-full h-12 hover:bg-blue-900 flex items-center p-2 rounded-lg ${
                    value.value === pathname[2]
                      ? "bg-white shadow border border-gray-400 shadow-white"
                      : null
                  }`}
                >
                  <div className="flex w-full items-center  h-full ">
                    <div>
                      <h1
                        className={`hover:block   font-bold ${
                          value.value === pathname[2]
                            ? "text-black"
                            : "text-white"
                        }`}
                      >
                        {value.name}
                      </h1>
                    </div>

                    {/* icons */}
                    <div className="flex-1 justify-end flex w-full">
                      {value.value === "Dashboard" ? (
                        <IoIosHome
                          size={24}
                          color={`${
                            value.value === pathname[2] ? "black" : "white"
                          }`}
                        />
                      ) : value.value === "Marketing" ? (
                        <HiMiniSpeakerWave
                          size={24}
                          color={`${
                            value.value === pathname[2] ? "black" : "white"
                          }`}
                        />
                      ) : value.value === "Ticket" ? (
                        <GiTicket
                          size={24}
                          color={`${
                            value.value === pathname[2] ? "black" : "white"
                          }`}
                        />
                      ) : value.value==="Blog"?(
                        <FaBlog
                          size={24}
                          color={`${
                            value.value === pathname[2] ? "black" : "white"
                          }`}
                        />
                      ) : value.value==="Profile"?(
                        <FaRegUserCircle
                          size={24}
                          color={`${
                            value.value === pathname[2] ? "black" : "white"
                          }`}
                        />
                      ):null}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* large screen */}

      <div className="h-screen hidden space-y-4 bg-blue-950 relative lg:w-72 w-20 lg:flex flex-col items-center">
        {/* header */}
        <Link
        href={"/"}
        className="w-full p-4 border-b border-gray-400 flex justify-center items-center">
        <img
             src="../../images/starrtix.png"
             className=" h-20"
             alt="image"
             />
        </Link>

        {/* Dashboard button  */}
        <div className="w-full h-full  flex flex-col items-center space-y-2">
          {userDashboardsPath.map((value, index) => (
            <Link
              key={index}
              href={`/User/${value.value}`}
              className={`w-full h-12 flex items-center justify-center ${
                value.value === pathname[2] ? "bg-white" : null
              }`}
            >
              <div className="flex items-center justify-start lg:w-10/12 h-full lg:space-x-4 ">
                {value.value === "Dashboard" ? (
                  <IoIosHome
                    size={24}
                    color={`${value.value === pathname[2] ? "black" : "white"}`}
                  />
                ) : value.value === "Marketing" ? (
                  <HiMiniSpeakerWave
                    size={24}
                    color={`${value.value === pathname[2] ? "black" : "white"}`}
                  />
                ) : value.value === "Ticket" ? (
                  <GiTicket
                    size={24}
                    color={`${value.value === pathname[2] ? "black" : "white"}`}
                  />
                ) : value.value === "Profile" ? (
                  <FaRegUserCircle size={24} color={`${value.value === pathname[2] ? "black" : "white"}`}/>

                ) : (
                  value.name==="Blog"?
                  <FaBlog size={24} color={`${value.value === pathname[2] ? "black" : "white"}`}/>

                  :
                  null
                )}
                <h1
                  className={` hidden hover:block lg:block font-bold ${
                    value.value === pathname[2] ? "text-black" : "text-white"
                  }`}
                >
                  {value.name}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1 h-screen overflow-scroll w-screen z-0 ">
        {children}
      </div>
    </div>
  );
}

export default Userdashboardwrapper;
