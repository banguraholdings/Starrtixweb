import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-blue-900 p-12">
      {/* container */}
      <div className="grid grid-cols-1 md:grid-cols-2   md:place-items-center lg:grid-cols-3 space-y-8">
        {/* section1 */}
        <div className=" space-y-2 flex md:flex-col">
          <div>
          <img
             src="images/LOGOSTAR.png"
             className="w-20 h-20"
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
            <button>
              <FaFacebook size={32} color="white" />
            </button>
            {/* twitter */}
            <button>
              <FaXTwitter size={32} />
            </button>
            {/* twitter */}
            <button>
              <FaLinkedin size={32} color="blue" />
            </button>
          </div>
        </div>

        {/* section 2 */}
        <div className="grid grid-cols-2 lg:gap-20">
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

        {/* section 3 */}
        <div className="text-white flex flex-col space-y-2 md:w-10/12 md:grid md:col-span-3 lg:col-span-1">
          <h1 className="text-xl font-bold text-center lg:text-left">
            Stay in The Loop
          </h1>
          <p className="text-xs font-thin text-center lg:text-left">
            join our mailing list to stay in the loop for Event and Concert
          </p>

          {/* email */}
          <div className="flex  p-2 rounded-full justify-center">
            <input type="text" className="flex-1 h-12 lg:h-8  bg-white rounded-l-full text-gray-700" />
            <button className="w-40 lg:w-4/12 h-12 lg:h-8 rounded-r-full bg-[#F5167E] text-xs p-2">
              Subscribe 
            </button>
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
