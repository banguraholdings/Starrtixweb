"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Lottie from "lottie-react";
import { usePathname } from "next/navigation";
import { userNavigation } from "@/api/dummyData";
function Userheader() {
  // states
  const [open, setOpened] = useState(false);

  const path = usePathname().split("/")[2];;
  //useEffect
  useEffect(() => {

    console.log(path)
  });
  return (
    <div className="text-white ">
      {/* navbar */}
      <div className="z-50 w-full p-6 bg-white items-center justify-center fixed border-b-2">
        {/* container */}
        <div className="flex  justify-between">
          {/* logo */}
          <div className="flex gap-12">
            <h1 className="text-4xl font-bold  text-blue-500">
              Sky<span className="text-xl text-white text-border">tix</span>
            </h1>
            {/* search bar */}
            <Link
              href={"/Pages/Search"}
              className="w-96 h-12 hidden bg-gray-200 lg:flex items-center p-2 gap-4"
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
                <li key={index} className={`${path===value.value?"underline text-blue-500":null}`}>
                  <Link href={`/User/${value.value}`}>{value.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* sign in button */}
          <div className="p-2 hidden lg:block">
            <Link className="bg-blue-500 p-4 rounded" href={"/Auth/Signin"}>
              Login
            </Link>
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
                <li key={index} className={`${path===value.value?"underline text-blue-500":null}`}>
                  <Link href={`/User/${value.value}`}>{value.name}</Link>
                </li>
              ))}
                <li className="flex gap-4">
                  {/* search */}
                  <input
                    type="search"
                    placeholder="what are you looking for?"
                    className="w-60 p-2 rounded"
                  />
                </li>

                <li>
                  <Link
                    className="bg-blue-500 p-4 rounded"
                    href={"/Auth/Signin"}
                  >
                    Login
                  </Link>
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
