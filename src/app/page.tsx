"use client";

import { eventTypes, events } from "@/api/dummyData";
import Homwrapper from "@/components/Homwrapper";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsFillCalendarEventFill } from "react-icons/bs";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";

export default function Home() {
  const [day, setDay] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventCategory, setEventCategory] = useState("");

  const handleDayChange = (event: SelectChangeEvent) => {
    setDay(event.target.value as string);
  };
  const handlEventChange = (event: SelectChangeEvent) => {
    setEventType(event.target.value as string);
  };
  const handlCategoryChange = (event: SelectChangeEvent) => {
    setEventCategory(event.target.value as string);
  };

  return (
    <Homwrapper>
      {/* event genre */}
      <div className="w-full p-4 items-center justify-center flex ">
        <div className="flex gap-6 lg:gap-10 overflow-scroll  hide-scrollbar">
          {eventTypes.map((event) => (
            <Link key={event.id} href={""}>
              {/* event icon */}
              <div className="w-20 h-20 lg:w-32 lg:h-32 border flex rounded-full items-center justify-center hover:border-blue-400">
                <BsFillCalendarEventFill color={"blue"} size={32} />
              </div>
              {/* event name */}
              <h1 className="text-xs text-gray-600 text-center">
                {event.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>

      {/* upcoming events */}
      <div className="w-full flex justify-center p-4 mt-12 ">
        {/* header */}
        <div className="w-11/12 lg:w-10/12 flex-col md:flex-row justify-between p-2 flex gap-4">
          <div className="text-xl font-bold">Upcoming Events</div>

          {/* dropdown filters */}
          <div className="grid grid-cols-2 md:grid-cols-3  gap-4 ">
            {/* days dropdown */}
            <div className="b">
              <FormControl
                variant="filled"
                sx={{ minWidth: 120, backgroundColor: "#F2F4FF" }}
              >
                <InputLabel id="demo-simple-select-filled-label">
                  day
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={day}
                  label="Age"
                  onChange={handleDayChange}
                >
                  <MenuItem value={10}>Musical</MenuItem>
                  <MenuItem value={20}>Tuesday</MenuItem>
                  <MenuItem value={30}>Wednesday</MenuItem>
                  <MenuItem value={30}>Thursday</MenuItem>
                  <MenuItem value={30}>Friday</MenuItem>
                  <MenuItem value={30}>Saturday</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* category dropdown */}

            <div className="flex justify-end md:justify-start">
              <FormControl
                variant="filled"
                sx={{ minWidth: 120, backgroundColor: "#F2F4FF" }}
              >
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={eventType}
                  label="Age"
                  onChange={handlEventChange}
                >
                  <MenuItem value={10}>Monday</MenuItem>
                  <MenuItem value={20}>Tuesday</MenuItem>
                  <MenuItem value={30}>Wednesday</MenuItem>
                  <MenuItem value={30}>Thursday</MenuItem>
                  <MenuItem value={30}>Friday</MenuItem>
                  <MenuItem value={30}>Saturday</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* event type dropdown */}
            <div className="">
              <FormControl
                variant="filled"
                sx={{ minWidth: 120, backgroundColor: "#F2F4FF" }}
              >
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={eventCategory}
                  label="Age"
                  onChange={handlCategoryChange}
                >
                  <MenuItem value={10}>Monday</MenuItem>
                  <MenuItem value={20}>Tuesday</MenuItem>
                  <MenuItem value={30}>Wednesday</MenuItem>
                  <MenuItem value={30}>Thursday</MenuItem>
                  <MenuItem value={30}>Friday</MenuItem>
                  <MenuItem value={30}>Saturday</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      {/* events */}
      <div className="w-full flex justify-center p-4 ">
        {/* container */}
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
                <img src={value.image} className="w-full rounded-t-[18.95px]" />
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
        {/* more events view */}
        <div className="w-full justify-center flex p-4">
           <button className="w-40 h-14 rounded-xl border-blue-500 border text-blue-500">
            See More
           </button>
        </div>
    </Homwrapper>
  );
}
