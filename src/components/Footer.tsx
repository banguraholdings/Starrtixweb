'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const path = usePathname().split("/")[2];

  return (
    <footer className="w-full bg-blue-900 p-12 items-center flex flex-col ">
      {/* container */}
      <div className="grid grid-cols-1 md:grid-cols-2   md:place-items-center  space-y-8">
        {/* section1 */}
        <div className=" space-y-2 flex md:flex-col ">
          <div>
          <img
             src={path===""?"images/starrtix.png":"/images/starrtix.png"}
             className=" w-20"
             alt="image"
             />
            {/* web description */}
            <p className="text-white text-sm font-thin w-11/12">
              StarrTix is a global self-service platform for live experiences that
              allows anyone to create share find and attend events athat fuel
              their passions and enrich their lives
            </p>
          </div>

          {/* social media */}
          <div className="flex space-x-4">
            {/* facebook */}
            <Link
            href={"https://www.facebook.com/profile.php?id=61558472874858"}
            >
              <FaFacebook size={32} color="white" />
            </Link>
            {/* twitter */}
            <Link
            href={"https://www.instagram.com/starrtix_01?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}
            >
              <FaInstagramSquare size={32} color="white"/>
            </Link>
            {/* twitter */}
            <button>
              <FaLinkedin size={32} color="white" />
            </button>
          </div>
        </div>

        {/* section 2 */}
        <div className="grid grid-cols-2 lg:gap-20 gap-10 ">
          <div className=" space-y-2 flex flex-col text-white">
            <h1 className=" text-white font-bold">Plan Events</h1>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href={""}>
                  <p className="font-light text-sm">Create ans Setup</p>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <p className="font-light text-sm">Sell Ticket</p>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <p className="font-light text-sm">Online Events</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className=" space-y-2 flex flex-col text-white  items-end md:items-start">
        
            <ul className="flex flex-col space-y-2 items-end md:items-start">
              <li>
                <Link href={""}>
                  <p className="font-light text-sm">About Us</p>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <p className="font-light text-sm">Contact Us</p>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <p className="font-light text-sm">Privacy</p>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <p className="font-light text-sm">Terms</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

       
      </div>

      <hr className="mt-8 mb-8" />
      <div className="w-full flex justify-center text-white text-sm">
        copyright @ 2023
      </div>
    </footer>
  );
}

export default Footer;
