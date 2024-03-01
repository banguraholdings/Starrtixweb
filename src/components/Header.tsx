'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Lottie from "lottie-react";
import Animation from "../../public/Lottie/AnimationHome.json";
import { usePathname } from "next/navigation";
function Header() {
  // states
  const [open, setOpened] = useState(false);

  const path = usePathname();
  //useEffect
  useEffect(() => {});
  return (
    <header
      style={{
        backgroundImage: `url('background/main.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="text-white lg:h-[75vh] h-[100vh]"
    >
      {/* navbar */}
      <div className="z-50 w-full p-6 bg-white items-center justify-center fixed border-b-2">
        {/* container */}
        <div className="flex  justify-between">
          {/* logo */}
          <div className="flex gap-12">
          <img
             src="/images/LOGOSTAR.png"
             className="w-40 h-40"
             />
            {/* search bar */}
            <Link
              href={"#"}
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
              <li>
                <Link href={"#"}>Home</Link>
              </li>
              <li>
                {" "}
                <Link href={"#"}>About Us</Link>
              </li>
              <li>
                {" "}
                <Link href={"#"}>Tickets </Link>
              </li>
              <li>
                {" "}
                <Link href={"#"}>Favorites </Link>
              </li>
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
                <li className="hover:underline hover:text-[#DB4444] hover:cursor-pointer">
                  Home
                </li>
                <li className="hover:underline hover:text-[#DB4444] hover:cursor-pointer">
                  About Us
                </li>
                <li className="hover:underline hover:text-[#DB4444] hover:cursor-pointer">
                  {" "}
                  Tickets
                </li>
                <li className="hover:underline hover:text-[#DB4444] hover:cursor-pointer">
                  Favorite{" "}
                </li>
                <li className="flex gap-4">
                  {/* search */}
                  <input
                    type="search"
                    placeholder="what are you looking for?"
                    className="w-60 p-2 rounded"
                  />
                </li>

                <li>
                <Link className="bg-blue-500 p-4 rounded" href={"/Auth/Signin"}>
              Login
            </Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      <div
        className={`w-full h-full bg-blue-700 bg-opacity-50 flex lg:flex-row lg:p-12 pt-12 flex-col items-center justify-center gap-8 ${
          path !== "/" ? "hidden" : "block"
        }`}
      >
        <div className="w-8/12 lg:gap-4 gap-2 items-center lg:items-start flex flex-col ">
          {/* header */}
          <h1 className="lg:text-4xl text-xl md:text-2xl font-serif text-center lg:text-start ">
            Maximize Your Sales, Minimize Your Fees Affordable Ticketing,
            Unmatched Efficiency
          </h1>
          {/* body */}
          <h1 className="text-xs lg:text-base md:text-sm text-center lg:text-start">
            Tired of losing a chunk of your profits to exorbitant ticketing
            fees? Say goodbye to hefty charges and hello to more earnings! Our
            platform revolutionizes the way you sell tickets - it&apos;s not just
            affordable, it&apos;s effective.
          </h1>

          {/* button */}
          <button className="items-center justify-center flex bg-blue-500 w-40 h-12 border rounded">
            <h1  className="">Find Events Nearby</h1>
          </button>
        </div>
        <div className=" p-4 bg-blue-200 rounded-full bg-opacity-50 flex items-center justify-center">
          <Lottie
          animationData={Animation}
         loop={true}
           style={{width:200, height:200}}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
