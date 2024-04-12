"use client";

import Userdashboardwrapper from "@/components/Userdashboardwrapper";
import React from "react";
import ISuperUser from "@/components/ProtectedRoute/ISuperUser";

import {
  FaRegCalendarAlt,
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { IoLocation } from "react-icons/io5";

function page() {
  const handlePictureUpload = (event: any) => {
    const file = event.target.files[0];
    console.log("Picture uploaded:", file);
    // Process the picture file as needed
  };

  const handleVideoUpload = (event: any) => {
    const file = event.target.files[0];
    console.log("Video uploaded:", file);
    // Process the video file as needed
  };
  return (
    <ISuperUser>
    <Userdashboardwrapper>
      {/* drop down to select event */}
      <div className="w-full p-2 ">
        <select
          name=""
          id=""
          className="w-60 p-2 border-[0.2px] rounded border-blue-500"
        >
          <option>Select Event</option>
          <option>com fest</option>
        </select>
      </div>

      {/* body */}
      <div className="flex flex-col lg:flex-row">
        {/* event details */}
        <div className="w-full p-2 space-y-4">
          <h1 className="text-xl">Event Details</h1>
          <img
            src="/images/event.jpg"
            alt="event-image"
            className="rounded-lg"
          />

          {/* event Name */}
          <div className="">
            <h1 className="text-lg font-medium">
              University Festival A Celebration of Culture, Talent, and Unity
            </h1>
          </div>

          {/* ABOUT EVENT */}
          <div>
            <h1 className="text-sm">
              Once a year, the campus of our esteemed university transforms into
              a vibrant hub of cultural celebration, creativity, and community
              spirit, marking the annual University Festival. This event,
              awaited with great anticipation by students, faculty, and alumni
              alike, is a spectacular showcase of the diverse talents and
              cultures that make up our university community.
            </h1>
          </div>
          {/* button for uploading pic and video  */}
          <div className="flex space-x-4">
            <label
              htmlFor="picture-upload"
              className="bg-orange-500 p-2 text-white rounded-xl"
            >
              Upload Picture
              <input
                type="file"
                id="picture-upload"
                accept="image/*"
                onChange={handlePictureUpload}
                style={{ display: "none" }}
              />
            </label>

            <label
              htmlFor="video-upload"
              className="p-2 text-white rounded-xl bg-green-500"
            >
              Upload Video
              <input
                type="file"
                id="video-upload"
                accept="video/*"
                onChange={handleVideoUpload}
                style={{ display: "none" }}
              />
            </label>
          </div>

          {/* details */}

          <div className="">
            <div className="p-2 flex  flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 ">
              {/* ticket price */}

              <div className="bg-gray-200 rounded p-2">
                <h1 className="text-gray-500">Ticket Price</h1>
                <h1>$120</h1>
              </div>
              {/*  date*/}

              <div className="bg-gray-200 rounded p-2">
                <h1 className="text-gray-500">Date</h1>
                <div className="flex items-center">
                  <h1>
                    {" "}
                    <FaRegCalendarAlt />
                  </h1>
                  <h1> Sunday, 12 June 2020</h1>
                </div>
              </div>
              {/*  date*/}

              <div className="bg-gray-200 rounded p-2">
                <h1 className="text-gray-500">location</h1>
                <div className="flex items-center ">
                  <h1>
                    {" "}
                    <IoLocation />
                  </h1>
                  <h1> Ferry Junction </h1>
                  <h1 className="pl-4">
                    {" "}
                    <FaArrowRight />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* social media to share and market event */}
        <div className="w-full lg:w-5/12 p-2">
          {/* phone screen */}
          <div className="lg:hidden flex  justify-between p-12 bg-gray-200 border-[0.2px] rounded-lg shadow-lg">
            <button>
              <FaFacebook color="blue" size={40}/>
            </button>
            <button>
              <FaInstagram color="purple" size={40}/>
            </button>
            <button>
              <FaXTwitter size={40}/>
            </button>
            <button>
              <FaWhatsappSquare color="green" size={40}/>
            </button>
          </div>

        {/* computer screen */}
        <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-center p-4 space-y-4 rounded-lg">
          <h1>
            Share Event
          </h1>
        <button className="w-full bg-blue-500 flex items-center justify-center p-2 rounded-lg">
              <FaFacebook color="white" size={40}/>
            </button>
            <button className="w-full bg-purple-500 flex items-center justify-center p-2 rounded-lg">
              <FaInstagram color="white" size={40}/>
            </button>
            <button className="w-full bg-black flex items-center justify-center p-2 rounded-lg">
              <FaXTwitter size={40} color="white"/>
            </button>
            <button className="w-full bg-green-500 flex items-center justify-center p-2 rounded-lg">
              <FaWhatsappSquare color="white" size={40}/>
            </button>
        </div>
        
        </div>
      </div>
    </Userdashboardwrapper>
    </ISuperUser>
  );
}

export default page;
