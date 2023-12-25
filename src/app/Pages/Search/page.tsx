"use client";

import React, { useState } from "react";
import Homerapper from "@/components/Homewrapper";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function Page() {
  //events array
  const events = [
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../images/event.jpg",
    },
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../images/event1.jpg",
    },
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../images/event2.jpg",
    },
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../images/event3.jpg",
    },
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../images/event4.jpg",
    },
    {
      month: "AUG",
      day: "14",
      header: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
      image: "../images/event.jpg",
    },
  ];
  // State to keep track of the selected value
  const [selectedDateValue, setSelectedDateValue] = useState("");

  // Handler for when the dropdown value changes
  const handleSelectedDateChange = (event: any) => {
    setSelectedDateValue(event.target.value);
  };
  return (
    <Homerapper>
      <div className="flex-1  flex flex-col  w-full items-center pt-12">
        {/* header */}
        <div className="w-11/12 lg:p-12 lg:pt-24 pt-24 pb-12 space-y-4">
          <h1 className="text-xl underline ">Search</h1>
          <p>Use the form below to filter your Search</p>
          <div className="w-full flex justify-center">
            <input
              type="text"
              className="flex-1 p-2 border"
              placeholder="enter keyword"
            />
            <div className="flex items-center justify-center bg-blue-500 p-2 md:p-4">
              <FaSearch color="white" />
            </div>
          </div>
        </div>

        {/* body */}
        <div className="w-full  border-t-2 flex">
          {/* filter */}
          <div className="hidden md:block md:w-60 md:h-full border-r-2 md:items-center overflow-scroll">
            <div className="w-full items-center flex flex-col  p-2">
              <h1 className="text-lg font-light">Filters</h1>
            </div>
            {/* filter by date */}
            <div className="w-full border-t-2">
              <div className="p-4 border-b-2 font-light">By Date</div>
              <ul className="p-4">
                <li className="space-x-4">
                  {" "}
                  <input type="radio" name="date" id="all" value={"all"} />
                  <label htmlFor="all">All</label>
                </li>
                <li className="space-x-4">
                  {" "}
                  <input type="radio" name="date" id="days" value={"days"} />
                  <label htmlFor="days">Days</label>
                </li>
                <li className="space-x-4">
                  {" "}
                  <input type="radio" name="date" id="weeks" value={"weeks"} />
                  <label htmlFor="weeks">Weeks</label>
                </li>
                <li className="space-x-4">
                  {" "}
                  <input type="radio" name="date" id="month" value={"month"} />
                  <label htmlFor="month">Months</label>
                </li>
                <li className="space-x-4">
                  {" "}
                  <input type="radio" name="date" id="year" value={"year"} />
                  <label htmlFor="year">Year</label>
                </li>
              </ul>
            </div>
            {/* filter by Event Type */}
            <div className="w-full border-t-2">
              <div className="p-4 border-b-2 font-light">By Event Type</div>
              <ul className="p-4">
                <li className="space-x-4">
                  {" "}
                  <input
                    type="radio"
                    name="eventtype"
                    id="allEvents"
                    value={"all"}
                  />
                  <label htmlFor="allEvents">All</label>
                </li>
                <li className="space-x-4">
                  {" "}
                  <input
                    type="radio"
                    name="eventtype"
                    id="Corporate"
                    value={"coporate"}
                  />
                  <label htmlFor="Corporate">Corporate</label>
                </li>
                <li className="space-x-4">
                  {" "}
                  <input
                    type="radio"
                    name="eventtype"
                    id="Social"
                    value={"Social"}
                  />
                  <label htmlFor="Social">Social</label>
                </li>
                <li className="space-x-4">
                  {" "}
                  <input
                    type="radio"
                    name="eventtype"
                    id="Charity"
                    value={"Charity"}
                  />
                  <label htmlFor="Charity">Charity</label>
                </li>
                <li className="space-x-4">
                  {" "}
                  <input
                    type="radio"
                    name="eventtype"
                    id="Entertainment"
                    value={"Entertainment"}
                  />
                  <label htmlFor="Entertainment">Entertainment</label>
                </li>
                <li className="space-x-4">
                  {" "}
                  <input
                    type="radio"
                    name="eventtype"
                    id="Education"
                    value={"Education"}
                  />
                  <label htmlFor="Education">Education</label>
                </li>
              </ul>
            </div>
          </div>

          {/* data */}

          <div className="p-4 flex flex-col items-center  w-full ">
            {/* filter for mobile view */}

            <div className="md:hidden w-full flex  space-x-6 ">
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
                <option value="">Select Event Type</option>
                <option value="Corporate">Corporate</option>
                <option value="Social">Social</option>
                <option value="Charity">Charity</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Education">Education</option>
              </select>
            </div>

              <div className="w-full">
                <h1 className="text-xl font-light">Result...</h1>
              </div>
            {/* events */}
            <div className="w-full bg-gray-100 rounded-lg flex flex-col items-center p-4">

              <div className="w-11/12 lg:w-10/12   grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          </div>
        </div>
      </div>
    </Homerapper>
  );
}

export default Page;