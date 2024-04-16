"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Lottie from "lottie-react";
import { usePathname } from "next/navigation";
import { userNavigation } from "@/api/dummyData";
import { authToken, getProfilePic } from "@/api/Auth";
import { FaRegUserCircle } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { userAuth } from "../../useContext";
import { FaUser } from "react-icons/fa6";
function Userheader() {
  // states
  const [open, setOpened] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [scroll, setIsScrolled] = useState<boolean>(false);
  const { username,logout } = userAuth();
  const path = usePathname().split("/")[2];
  const [profilepic, setProfilepic] = useState<string>("")

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

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const closeAtMinWidth = () => {
    if (window.innerWidth >= 768) {
      setOpened(false);
    }
  };
  useEffect(() => {
    getProfilePic().then((value) => {
      console.log(value?.data[0].image)
      setProfilepic(value?.data[0].image)
    })
    // console.log("path name" + path);
  }, []);
  useEffect(() => {
    //  getToken().catch((error) => {
    //   console.log(error)
    //  })
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    closeAtMinWidth();
    window.addEventListener("resize", closeAtMinWidth);

    return () => window.removeEventListener("resize", closeAtMinWidth);
  }, []);
  return (
    <div className="text-white">
      {/* navbar */}
      <div
        className={`${scroll ? "bg-white border-b-2" : null} ${
          open ? "bg-white" : ""
        }    z-50  w-full  fixed  items-center justify-center  p-4`}
      >
        {/* container */}
        <div className="flex h-full justify-between ">
          {/* logo */}
          <Link
          href={"/"}
          >
            <img
              src={
                path === ""
                  ? "/images/starrtix.png"
                  : "/images/starrtix.png"
              }
              className="w-32 h-14"
              alt="logo"
            />
          </Link>

          {/* navigation */}
          <div
            className={`${scroll ? "text-black " : "text-white "} ${
              open ? "hidden" : "hidden md:flex"
            } text-lg w-5/12 lg:w-4/12 lg:items-center  `}
          >
            <ul
              className={` flex text- font-light justify-between items-center w-full `}
            >
              {userNavigation.map((value: any, index) => (
                <li
                  key={index}
                  className={`${
                    path === value.value ? "underline underline-color " : null
                  } hover:underline hover:underline-color`}
                >
                  <Link
                    href={
                      value.value === undefined ? "/" : `/User/${value.value}`
                    }
                  >
                    {value.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* search bar
              <Link
              href={"/Pages/Search"}
              className={`lg:w-80 xl:w-96 h-12  lg:rounded-lg rounded-full bg-gray-200 ${open?'hidden':'hidden md:flex'} flex items-center justify-center lg:p-2 p-4 lg:gap-4`}
            >
              <FaSearch color={"grey"} />
              <div className="lg:flex-1 text-sm text-gray-400">
                <h1 className="hidden lg:flex">Search for event</h1>
              </div>
            </Link> */}
          </div>
          {/* sign in button or Authenticated user*/}
          <div className=" hidden  items-center  lg:flex">
            {username ? (
              <div className="mr-8  group">
                <div className="text-white hover:cursor-pointer hover:underline flex items-center space-x-2">
                  {
                    profilepic?
                    <img
                    src={profilepic}
                    className="w-12 h-12 rounded-full border"
                    alt="image"
                    />
                    :
                  <FaRegUserCircle
                    size={24}
                    color={scroll ? "black" : "white"}
                  />
                  }
                  <h1 className={`${scroll ? "text-black" : "text-white"}`}>
                    {username.first_name} {username.last_name}
                  </h1>
                </div>

                <div className="absolute w-32 hidden group-hover:block bg-white shadow-lg rounded mt-2">
                  <a
                    href="/User/Profile"
                    className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <h1>

                    Profile
                    </h1>
                    <FaUser size={18}  />

                  </a>
                  <button
                  onClick={()=>{
                    logout()
                  }}
                    className=" flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <h1>

                    Logout
                    </h1>
                    <FiLogOut size={18} color="red" />

                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-row space-x-2 lg:space-x-4 md:hidden lg:flex   items-center pr-4">
                <Link
                  className={`${
                    scroll ? "text-black" : "text-white"
                  } p-4 rounded hover:underline underline-color`}
                  href={"/Auth/Signin"}
                >
                  Sign in
                </Link>
                <Link
                  className="bg-[#fb8500] p-2 w-24 flex items-center justify-center rounded-full"
                  href={"/Auth/Signup"}
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* harmburger */}
          <div className="lg:hidden flex items-center  pr-4">
            {!open ? (
              <button className="" onClick={() => setOpened(true)}>
                <GiHamburgerMenu size={40} color={scroll ? "black" : "white"} />
              </button>
            ) : (
              <button onClick={() => setOpened(false)}>
                <IoClose size={40} color={"black"} />
              </button>
            )}
          </div>
        </div>

        {/* dropdown */}
        <div className="lg:hidden text-black ">
          {open ? (
            <div className="p-4 bg-white border-t-2">
              <ul className="w-full p-4  h-full font-thin gap-4 flex flex-col">
                {userNavigation.map((value: any, index) => (
                  <div key={index} className="grid gap-3">
                    <div className="flex space-x-1 items-center">
                      <li
                        className={`${
                          path === value.value
                            ? "underline underline-color "
                            : null
                        }
                        hover:border-l-4 hover:border-orange-500 flex items-center p-2
                        `}
                      >
                        <Link href={`/User/${value.value}`}>{value.name}</Link>
                      </li>
                    </div>

                    <hr />
                  </div>
                ))}
                <li className="flex gap-4 mb-2 ">
                  {/* search */}
                  {/* <Link
                    href={"/Pages/Search"}
                    className="w-96 rounded-lg bg-gray-200 flex items-center p-3 gap-4"
                  >
                    <FaSearch color={"grey"} />
                    <div className="flex-1 text-sm text-gray-400">
                      <h1>Search for event</h1>
                    </div>
                  </Link> */}
                </li>

                <li>
                  {username ? (
                    <div
                      className="pr-4 flex 
                    lg:space-x-12 space-x-2 justify-center items-center"
                    >
                      <div className="text-black  flex items-center space-x-2">
                        <FaRegUserCircle size={24} />
                        <h1>
                          {username.first_name} {username.last_name}
                        </h1>
                      </div>

                      <FaStarOfLife size={12} color="#2196F3" />
                      <Link
                        href={""}
                        className="text-black p-1 w-24 border justify-center rounded hover:border-blue-500  flex items-center space-x-2"
                      >
                        <h1>Profile</h1>
                      </Link>
                      <FaStarOfLife size={12} color="#2196F3" />

                      <button
                      onClick={()=>{
                        logout()

                      }}
                        className="text-black border w-24 p-1 rounded hover:border-red-500 flex items-center space-x-2"
                      >
                        <FiLogOut size={24} color="red" />
                        <h1>Logout</h1>
                      </button>
                    </div>
                  ) : (
                    <div className="space-x-4">
                      <Link
                        className="bg-blue-500 p-4 rounded text-white"
                        href={"/Auth/Signin"}
                      >
                        Sign In
                      </Link>

                      <Link
                        className="bg-[#fb8500] text-white p-4 rounded"
                        href={"/Auth/Signup"}
                      >
                        Register
                      </Link>
                    </div>
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
