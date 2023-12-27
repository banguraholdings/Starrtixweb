"use client";

import Dashboardwrapper from "@/components/Dashboardwrapper";
import React, { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FcGlobe } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";

function page() {
  //events array
  const events = [
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../../images/event.jpg",
    },
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../../images/event1.jpg",
    },
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../../images/event2.jpg",
    },
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../../images/event3.jpg",
    },
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../../images/event4.jpg",
    },
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../../images/event.jpg",
    },
  ];
  //states that control the events
  const [isSearch, setIsSearch] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [selectedDateValue, setSelectedDateValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  // Handler for when the dropdown value changes
  const handleSelectedDateChange = (event: any) => {
    setSelectedDateValue(event.target.value);
  };
  return (
    <Dashboardwrapper>
      <div className="w-full flex  justify-center">
        {/* header */}
        <div className="w-11/12   p-4 flex items-center">
          <h1 className="underline text-xl font-bold">All Events</h1>

          <div className=" flex-1 w-full flex justify-end space-x-2">
            {/* Search */}
            {!isSearch ? (
              <button
                onClick={() => setIsSearch(true)}
                className="md:p-4 p-2 bg-blue-500 text-white"
              >
                Search
              </button>
            ) : null}
            {/* filter */}
            {!isFilter ? (
              <button
                onClick={() => setIsFilter(true)}
                className="md:p-4 p-2 border bg-blue-100"
              >
                <IoFilterSharp size={24} className="text-gray-600" />
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        {/* Search and filter */}
        <div className="w-11/12 p-2 space-y-2">
          {/* Search */}

          {isSearch ? (
            <div className="w-full space-x-2">
              <button onClick={() => setIsSearch(false)}>
                <MdCancel size={24} color="gray" />
              </button>
              <div className="bg-red-500 flex ">
                <input type="text" className="flex-1 p-2 border" />
                <div className="flex items-center justify-center bg-blue-500 p-2 md:p-4">
                  <FaSearch color="white" />
                </div>
              </div>
            </div>
          ) : null}
          {/* filter */}

          {isFilter ? (
            <div className="w-full space-x-2">
              <button onClick={() => setIsFilter(false)}>
                <MdCancel size={24} color="gray" />
              </button>
              <div className=" w-full flex   ">
                {/* filter by date */}
                <select
                  value={selectedDateValue}
                  onChange={handleSelectedDateChange}
                  className="bg-blue-200 p-2 rounded border-[0.2px]"
                >
                  <option value="">Select date</option>
                  <option value="days">days</option>
                  <option value="weeks">weeks</option>
                  <option value="month">month</option>
                  <option value="year">year</option>
                </select>
                {/* filter by Event type */}
                <select
                  value={selectedDateValue}
                  onChange={handleSelectedDateChange}
                  className="bg-blue-200 p-2 rounded border-[0.2px]"
                >
                  <option value="">Select Event</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Social">Social</option>
                  <option value="Charity">Charity</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Education">Education</option>
                </select>
              </div>
            </div>
          ) : null}
        </div>

        {/* filter by past and present */}
        <div className="w-11/12 border-b-2 flex">
          <div
            className={`p-2 flex  ${
              !isActive ? "border-blue-500 border-b-4" : null
            }  space-x-1`}
          >
            <p>{"{10}"}</p>
            <button onClick={() => setIsActive(false)}>Active Event</button>
          </div>
          <div
            className={`p-2 flex  ${
              isActive ? "border-blue-500 border-b-4" : null
            }  space-x-1`}
          >
            <p>{"{2}"}</p>
            <button onClick={() => setIsActive(true)}>Ended Event</button>
          </div>
        </div>



        {/* event data viewing and adding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full place-items-center p-2 gap-4">
            {/* adding event */}
            <div className="w-11/12 h-40 md:h-full bg-gray-100 border-[0.2px] shadow-md flex flex-col items-center justify-center">
            <FcGlobe size={60}/>
            <button className="p-2 md:p-4 bg-blue-500 text-white rounded">

              Add Event
            </button>
            </div>
            {/* event data */}
            {events.map((value, index) => (
                  <Link
                    style={{ borderRadius: 18.95, border: 2, borderWidth: 2 }}
                    href={"#"}
                    key={index}
                    passHref
                  >
                    {/* img */}
                    <div className="w-full">
                      <Image
                        width={100}
                        height={100}
                        style={{
                          width: "100%",
                          borderTopLeftRadius: 18.95,
                          borderTopRightRadius: 18.95,
                        }}
                        src={value.image}
                        alt="pic"
                      />
                    </div>
                    {/* decription */}
                    <div className="w-full p-4 flex space-x-2 border rounded-b-[18.95px]">
                      {/* date */}
                      <div className="text-center">
                        <p className="font-bold text-blue-500">{value.month}</p>
                        <h1>{value.day}</h1>
                      </div>

                      {/* decription */}
                      <div className="space-y-2">
                        <p className="text-xs font-bold">{value.header}</p>
                        <p className="text-xs font-thin">{value.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
        </div>
      </div>
    </Dashboardwrapper>
  );
}

export default page;
