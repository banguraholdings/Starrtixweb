"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Lottie from "lottie-react";
import { usePathname } from "next/navigation";
import { userNavigation } from "@/api/dummyData";
import { authToken } from "@/api/Auth";
import { FaRegUserCircle } from "react-icons/fa";
import { userAuth } from "../../useContext";

function Userheader() {
  // states
  const [open, setOpened] = useState(false);
  const [user, setUser] = useState<any>(null);

  const { username } = userAuth();
  const path = usePathname().split("/")[2];
  // //get user token from local storage
  // const getToken = async () => {

  //     const token = await localStorage.getItem("token");
  //     if (token) {
  //       authToken(token).then((value) => {
  //         if(value){

  //           setUser(value?.data);
  //         }else{
  //           setUser(null)
  //         }
  //       });
  //     }

  // };

  useEffect(() => {
    //  getToken().catch((error) => {
    //   console.log(error)
    //  })
  }, []);
  return (
    <div className="text-white ">
      {/* navbar */}
      <div className="z-50 w-full p-6 bg-white items-center justify-center fixed border-b-2">
        {/* container */}
        <div className="flex  justify-between">
          {/* logo */}
          <div className="flex gap-12">
          <img
             src="../../images/LOGOSTAR.png"
             className="w-20 h-20"
             />
            {/* search bar */}
            <Link
              href={"/Pages/Search"}
              className="w-96 h-12 hidden rounded-lg bg-gray-200 lg:flex items-center p-2 gap-4"
            >
              <FaSearch color={"grey"} />
              <div className="flex-1 text-sm text-gray-400">
                <h1>Search for event</h1>
              </div>
            </Link>
          </div>

          {/* navigation */}
          <div className="  w-4/12 hidden lg:flex  text-black">
            <ul className="flex text- font-light justify-between items-center w-full">
              {userNavigation.map((value: any, index) => (
                <li
                  key={index}
                  className={`${
                    path === value.value ? "underline text-blue-500" : null
                  }`}
                >
                  <Link href={`/User/${value.value}`}>{value.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* sign in button or Authenticated user*/}
          <div className="p-2 hidden lg:block ">
            {username ? (
              <div className="text-black flex items-center space-x-2">
                <FaRegUserCircle size={24} />
                <h1>hi</h1>
              </div>
            ) : (
              <div className="flex-row space-x-2">
                <Link className="bg-blue-500 p-4 rounded" href={"/Auth/Signin"}>
                  Login
                </Link>
                <Link className="bg-blue-500 p-4 rounded" href={"/Auth/Signup"}>
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* harmburger */}
          <div className="lg:hidden">
            {!open ? (
              <button className="" onClick={() => setOpened(true)}>
                <GiHamburgerMenu size={32} color={"black"} />
              </button>
            ) : (
              <button onClick={() => setOpened(false)}>
                <IoClose size={32} color={"black"} />
              </button>
            )}
          </div>
        </div>

        {/* dropdown */}
        <div className="lg:hidden text-black">
          {open ? (
            <div>
              <ul className="w-full font-thin gap-2 flex flex-col">
                {userNavigation.map((value: any, index) => (
                  <li
                    key={index}
                    className={`${
                      path === value.value ? "underline text-blue-500" : null
                    }`}
                  >
                    <Link href={`/User/${value.value}`}>{value.name}</Link>
                  </li>
                ))}
                <li className="flex gap-4 mb-2 bg-red-500">
                  {/* search */}
                  <Link
                    href={"/Pages/Search"}
                    className="w-96 h-12 hidden rounded-lg bg-gray-200 lg:flex items-center p-2 gap-4"
                  >
                    <FaSearch color={"grey"} />
                    <div className="flex-1 text-sm text-gray-400">
                      <h1>Search for event</h1>
                    </div>
                  </Link>
                </li>

                <li>
                  {username ? (
                    <div className="text-black flex items-center space-x-2">
                      <FaRegUserCircle size={24} />
                      <h1>hi </h1>
                    </div>
                  ) : (
                    <Link
                      className="bg-blue-500 p-4 rounded"
                      href={"/Auth/Signin"}
                    >
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Userheader;
